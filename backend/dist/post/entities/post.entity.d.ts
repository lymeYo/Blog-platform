import { UserEntity } from 'src/user/entities/user.entity';
import { CommentEntity } from "../../comment/entities/comment.entity";
export declare class PostEntity {
    id: number;
    userId: number;
    user: UserEntity;
    comments: CommentEntity[];
    title: string;
    body: string;
    rating: number;
    views: number;
    createdAt: Date;
    updatedAt: Date;
}
