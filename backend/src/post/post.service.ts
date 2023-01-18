import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/user/entities/user.entity";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { SearchPostDto } from "./dto/search-post-dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { PostEntity } from "./entities/post.entity";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private repository: Repository<PostEntity>
  ) {}

  async create(dto: CreatePostDto, userId: number) {
    const safetyDto = {
      user: {
        id: userId,
      },
      title: dto.title,
      body: dto.body,
      rating: dto.rating,
    };
    return this.repository.save(safetyDto);
  }

  async update(id: number, dto: UpdatePostDto, userId: number, withoutUserAccess?: boolean): Promise<UpdateResult> {
    const post = await this.repository.findOneBy({ id })
    if (!post) throw new NotFoundException('Пост не найден');
    if (!withoutUserAccess && post.user.id != userId) throw new NotFoundException("У вас нет доступа к этому посту");

    const safetyDto = {
      title: dto.title,
      body: dto.body,
      rating: dto.rating,
    };
    return this.repository.update(id, safetyDto);
  }

  async remove(id: number, userId: number): Promise<DeleteResult> {
    const post = await this.repository.findOneBy({ id })
    if (!post) throw new NotFoundException('Пост не найден');
    if (post.user.id != userId) throw new NotFoundException("У вас нет доступа к этому посту");

    return this.repository.delete(id);
  }

  async findAll(): Promise<PostEntity[]> {
    return await this.repository.find({
      order: {
        createdAt: "DESC"
      }
    });
  }

  async findOne(id: number): Promise<PostEntity> {
    const qb = await this.repository.createQueryBuilder("posts");

    await qb //инкрементирую количесвто просмотров с каждым вызовом статьи
      .whereInIds(id)
      .update()
      .set({
        views: () => "views + 1"
      })
      .execute();

    // return this.repository.findOneBy({ id });
    return this.repository.findOneBy({ id })
  }

  async search(dto: SearchPostDto) {
    const qb = this.repository.createQueryBuilder("posts");
    qb.limit(dto.limit || 0);
    qb.take(dto.take || 10);

    if (dto.sortBy)
      qb.orderBy(dto.sortBy, dto.increaseStatus || "DESC");

    if (dto.body)
      qb.andWhere("post.body ILIKE :body", { body: `%${dto.body}%` });
    if (dto.title)
      qb.andWhere("post.title ILIKE :title", { title: `%${dto.title}%` });

    const items = await qb.getMany();

    return items;
  }
}
