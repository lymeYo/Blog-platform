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
            id: string;
        };
        id: string;
        title: string;
        body: string;
        rating: number;
    } & import("./entities/post.entity").PostEntity>;
    findAll(): Promise<import("./entities/post.entity").PostEntity[]>;
    sortByType(type: 'popular' | 'rating', increaseStatus: 'desc' | 'asc'): Promise<import("./entities/post.entity").PostEntity[]>;
    searchPosts(dto: SearchPostDto): Promise<import("./entities/post.entity").PostEntity[]>;
    findOne(id: string): Promise<import("./entities/post.entity").PostEntity>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
