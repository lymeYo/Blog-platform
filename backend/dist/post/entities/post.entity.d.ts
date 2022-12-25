import { UserEntity } from "src/user/entities/user.entity";
export declare class PostEntity {
    id: string;
    user: UserEntity;
    title: string;
    body: string;
    rating: number;
    views: number;
    createdAt: Date;
    updatedAt: Date;
}
