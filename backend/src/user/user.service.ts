import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, DeleteResult, Repository, UpdateResult } from 'typeorm';
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

  async findOne(id: string): Promise<UserEntity> {
    const result = await this.repository.findOneBy({ id });

    if (!result) throw new NotFoundException('Пользователь не найден');

    return result;
  }

  async update(id: string, dto: UpdateUserDto): Promise<UpdateResult> {
    const result = await this.repository.update(id, dto);

    if (!result) throw new NotFoundException('Пользователь не найден');

    return result;
  }

  remove(id: string): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
