import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { SearchPostDto } from "./dto/search-post-dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { PostEntity } from "./entities/post.entity";
export declare class PostService {
    private repository;
    constructor(repository: Repository<PostEntity>);
    create(dto: CreatePostDto, userId: number): Promise<{
        user: {
            id: number;
        };
        title: string;
        body: string;
        rating: number;
    } & PostEntity>;
    update(id: number, dto: UpdatePostDto, userId: number, withoutUserAccess?: boolean): Promise<UpdateResult>;
    remove(id: number, userId: number): Promise<DeleteResult>;
    findAll(): Promise<PostEntity[]>;
    findOne(id: number): Promise<PostEntity>;
    search(dto: SearchPostDto): Promise<PostEntity[]>;
}
