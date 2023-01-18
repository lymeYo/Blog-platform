import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DeepPartial, DeleteResult, Repository, UpdateResult } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserEntity } from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  create(dto: CreateUserDto) {
    const safetyDto: CreateUserDto = {
      username: dto.username,
      password: dto.password,
      email: dto.email || null,
    }
    return this.repository.save(safetyDto) // передаю весь dto так как в нем есть все необходимые свойства
  }

  findAll(): Promise<UserEntity[]> {
    return this.repository.find()
  }

  async findOneById(id: number): Promise<UserEntity> {
    const result = await this.repository.findOneBy({ id })
    if (!result) throw new NotFoundException('Пользователь не найден')

    return result
  }

  async findOneByName(username: string, returnWithPassword?: boolean): Promise<UserEntity> {
    const result = returnWithPassword
      ? await this.repository.findOne({
          where: {
            username,
          },
          select: ['username', 'email', 'password', 'id'],
        })
      : await this.repository.findOneBy({ username })

    if (!result) throw new NotFoundException('Пользователь не найден')
    console.log(result)
    
    return result
  }

  async update(id: number, dto: UpdateUserDto): Promise<UserEntity> {
    const result = await this.repository.update(id, dto)

    if (!result) throw new NotFoundException('Пользователь не найден')

    const user = await this.findOneById(id)

    return user
  }

  remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id)
  }
}









































