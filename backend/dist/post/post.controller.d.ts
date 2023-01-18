import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { SearchPostDto } from './dto/search-post-dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(createPostDto: CreatePostDto): Promise<{
        userId: any;
        user: {
            id: number;
        };
        title: string;
        body: string;
        rating: number;
    } & import("./entities/post.entity").PostEntity>;
    findAll(): Promise<import("./entities/post.entity").PostEntity[]>;
    searchPosts(dto: SearchPostDto): Promise<import("./entities/post.entity").PostEntity[]>;
    findOne(id: number): Promise<import("./entities/post.entity").PostEntity>;
    update(id: number, updatePostDto: UpdatePostDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
