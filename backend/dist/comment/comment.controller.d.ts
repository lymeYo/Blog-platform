import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(userId: number, createCommentDto: CreateCommentDto): Promise<import("./entities/comment.entity").CommentEntity>;
    findAll(): Promise<import("./entities/comment.entity").CommentEntity[]>;
    findOne(id: number): Promise<import("./entities/comment.entity").CommentEntity>;
    updateStatistics(id: number, updateCommentDto: UpdateCommentDto, userId: number): Promise<import("typeorm").UpdateResult>;
    update(id: number, updateCommentDto: UpdateCommentDto, userId: number): Promise<import("typeorm").UpdateResult>;
    remove(id: number, userId: number): Promise<import("typeorm").DeleteResult>;
}
