import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { SearchPostDto } from './dto/search-post-dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(userId: number, dto: CreatePostDto): Promise<{
        user: {
            id: number;
        };
        title: string;
        body: string;
        rating: number;
    } & import("./entities/post.entity").PostEntity>;
    updateStatistics(userId: number, id: number, updatePostDto: UpdatePostDto): Promise<import("typeorm").UpdateResult>;
    update(userId: number, id: number, updatePostDto: UpdatePostDto): Promise<import("typeorm").UpdateResult>;
    remove(userId: number, id: number): Promise<import("typeorm").DeleteResult>;
    findAll(): Promise<import("./entities/post.entity").PostEntity[]>;
    searchPosts(dto: SearchPostDto): Promise<import("./entities/post.entity").PostEntity[]>;
    findOne(id: number): Promise<import("./entities/post.entity").PostEntity>;
}
