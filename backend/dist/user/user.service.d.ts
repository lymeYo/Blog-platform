import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
export declare class UserService {
    private repository;
    constructor(repository: Repository<UserEntity>);
    create(dto: CreateUserDto): Promise<CreateUserDto & UserEntity>;
    findAll(): Promise<UserEntity[]>;
    findOneById(id: number): Promise<UserEntity>;
    findOneByName(username: string): Promise<UserEntity>;
    update(id: number, dto: UpdateUserDto): Promise<UserEntity>;
    remove(id: number): Promise<DeleteResult>;
}
