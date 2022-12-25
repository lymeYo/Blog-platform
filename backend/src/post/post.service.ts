import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { SearchPostDto } from './dto/search-post-dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private repository: Repository<PostEntity>,
  ) {}

  create(dto: CreatePostDto) {
    return this.repository.save({
      ...dto,
      userId: null,
      user: {
        id: dto.userId,
      },
    });
  }

  findAll(): Promise<PostEntity[]> {
    return this.repository.find({
      relations: ['user'],
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findOne(id: string): Promise  <PostEntity> {
    // const result = await this.repository.findOneBy({ id });
    // if (!result) throw new NotFoundException('Пост не найден');

    // await this.repository.update(id, {views: result.views + 1})

    const qb = await this.repository.createQueryBuilder('posts');

    await qb //инкрементирую количесвто просмотров с каждым вызовом статьи
      .whereInIds(id)
      .update()
      .set({
        views: () => 'views + 1',
      })
      .execute();

    return this.repository.findOneBy({ id });
  }

  async findAllBySort(
    type: 'popular' | 'rating',
    increaseStatus: 'desc' | 'asc',
  ) {
    const qb = this.repository.createQueryBuilder('posts');
    qb.orderBy(
      type == 'popular' ? 'views' : 'rating',
      increaseStatus == 'desc' ? 'DESC' : 'ASC',
    );

    const items = await qb.getMany();

    return items;
  }

  async search(dto: SearchPostDto) {
    console.log(dto);

    const qb = this.repository.createQueryBuilder('posts');
    qb.limit(dto.limit || 0);
    qb.take(dto.take || 10);

    if (dto.sortBy)
      qb.orderBy(dto.sortBy, dto.increaseStatus ? dto.increaseStatus : 'DESC');

    if (dto.body)
      qb.andWhere('post.body ILIKE :body', { body: `%${dto.body}%` });
    if (dto.title)
      qb.andWhere('post.title ILIKE :title', { title: `%${dto.title}%` });

    const items = await qb.getMany();

    return items;
  }

  async update(id: string, dto: UpdatePostDto): Promise<UpdateResult> {
    const result = await this.repository.update(id, dto);
    if (!result) throw new NotFoundException('Пост не найден');

    return result;
  }

  remove(id: string): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
