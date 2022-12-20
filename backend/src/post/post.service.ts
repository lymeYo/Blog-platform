import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
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
        id: dto.userId
      }
    });
  }

  findAll(): Promise<PostEntity[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<PostEntity> {
    const result =  await this.repository.findOneBy({ id });

    if(!result) throw new NotFoundException('Пост не найден')

    return result
  }

  async update(id: string, dto: UpdatePostDto): Promise<UpdateResult> {
    const result =  await this.repository.update(id, dto);

    if(!result) throw new NotFoundException('Пост не найден')

    return result
  }

  remove(id: string): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
