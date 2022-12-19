import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  create(dto: CreateUserDto) {
    return this.repository.save(dto); // передаю весь dto так как в нем есть все необходимые свойства
    // return 'This action adds a new user';
  }

  findAll(): Promise<UserEntity[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<UserEntity> {
    return this.repository.findOneBy({ id });
  }

  update(id: number, dto: UpdateUserDto): Promise<UpdateResult> {
    return this.repository.update(id, dto);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
