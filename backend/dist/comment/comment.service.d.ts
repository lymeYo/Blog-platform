import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';
export declare class CommentService {
    private repository;
    constructor(repository: Repository<CommentEntity>);
    create(dto: CreateCommentDto, userId: number): Promise<{
        text: string;
        rating: number;
        post: {
            id: number;
        };
        user: {
            id: number;
        };
    } & CommentEntity>;
    update(id: number, dto: UpdateCommentDto, userId: number, withoutUserAccess?: boolean): Promise<UpdateResult>;
    remove(id: number, userId: number): Promise<DeleteResult>;
    findAll(): Promise<CommentEntity[]>;
    findOne(id: number): Promise<CommentEntity>;
}
