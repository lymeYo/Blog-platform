import { PostEntity } from "src/post/entities/post.entity";
import { UserEntity } from "src/user/entities/user.entity";
export declare class CommentEntity {
    id: string;
    user: UserEntity;
    post: PostEntity;
    text: string;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
}
