import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<import("./entities/user.entity").UserEntity[]>;
    getProfile(req: any): Promise<any>;
    findOne(id: number): Promise<import("./entities/user.entity").UserEntity>;
    update(req: any, updateUserDto: UpdateUserDto): Promise<import("./entities/user.entity").UserEntity>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
