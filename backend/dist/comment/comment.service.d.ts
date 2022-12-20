import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';
export declare class CommentService {
    private repository;
    constructor(repository: Repository<CommentEntity>);
    create(dto: CreateCommentDto): Promise<{
        id: string;
        text: string;
        rating: number;
        post: {
            id: string;
        };
        user: {
            id: string;
        };
    } & CommentEntity>;
    findAll(): Promise<CommentEntity[]>;
    findOne(id: string): Promise<CommentEntity>;
    update(id: string, dto: UpdateCommentDto): Promise<UpdateResult>;
    remove(id: string): Promise<DeleteResult>;
}
