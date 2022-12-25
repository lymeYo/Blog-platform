import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
export declare class UserService {
    private repository;
    constructor(repository: Repository<UserEntity>);
    create(dto: CreateUserDto): Promise<CreateUserDto & UserEntity>;
    findAll(): Promise<UserEntity[]>;
    findOneById(id: string): Promise<UserEntity>;
    findOneByName(fullName: string): Promise<UserEntity>;
    update(id: string, dto: UpdateUserDto): Promise<UpdateResult>;
    remove(id: string): Promise<DeleteResult>;
}
