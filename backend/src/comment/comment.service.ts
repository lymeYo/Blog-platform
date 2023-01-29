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

  async create(dto: CreateCommentDto, userId: number) {
    const safetyDto = {
      text: dto.text,
      rating: dto.rating,
      post: { id: dto.postId },
      user: { id: userId },
    }

    const res = await this.repository.save(safetyDto)
    return this.repository.findOneBy({ id: res.id });
  }

  async update(id: number, dto: UpdateCommentDto, userId: number, withoutUserAccess?: boolean): Promise<UpdateResult> {
    const comment = await this.repository.findOneBy({ id })
    if (!comment) throw new NotFoundException('Комментарий не найден');
    if (!withoutUserAccess && comment.user.id != userId) throw new NotFoundException("У вас нет доступа к этому комментарию");

    return this.repository.update(id, dto)
  }

  async remove(id: number, userId: number): Promise<DeleteResult> {
    const comment = await this.repository.findOneBy({ id })
    if (!comment) throw new NotFoundException('Комментарий не найден');
    if (comment.user.id != userId) throw new NotFoundException("У вас нет доступа к этому комментарию");

    return this.repository.delete(id)
  }

  findAll(): Promise<CommentEntity[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<CommentEntity> {
    const result = await this.repository.findOneBy({ id });

    if (!result) throw new NotFoundException('Комментарий не найден');

    return result;
  }
}
