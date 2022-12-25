import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private repository: Repository<CommentEntity>,
  ) {}

  create(dto: CreateCommentDto) {
    return this.repository.save({
      id: dto.id,
      text: dto.text,
      rating: dto.rating,
      post: { id: dto.postId },
      user: { id: dto.userId }
    });
  }

  findAll(): Promise<CommentEntity[]> {
    return this.repository.find({ relations: ['user', 'post'] });
  }

  async findOne(id: string): Promise<CommentEntity> {
    const result = await this.repository.findOneBy({ id });

    if (!result) throw new NotFoundException('Комментарий не найден');

    return result;
  }

  async update(id: string, dto: UpdateCommentDto): Promise<UpdateResult> {
    const result = await this.repository.update(id, dto);

    if (!result) throw new NotFoundException('Комментарий не найден');

    return result;
  }

  remove(id: string): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
