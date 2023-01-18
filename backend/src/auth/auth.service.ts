import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';


@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, userPassword: string): Promise<any> {
    const user = await this.userService.findOneByName(username);

    if (!user || user.password !== userPassword) return null;

    const { password, ...result } = user;
    return result;
  }

  async login(user: UserEntity) {
    const { password, ...userData } = user;
    return {
      ...userData,
      access_token: this.generateJwtToken(userData),
    };
  }

  async register(dto: CreateUserDto) {
    try {
      const { password, ...userData } = await this.userService.create(dto); //создаю пользователя и возвращаю егo, забрав пароль
      
      return {
        ...userData,
        access_token: this.generateJwtToken(userData),
      }
    } catch {
      console.log(dto);
      throw new ForbiddenException(undefined, 'Неверные данные для регистрации');
    }
  }

  private generateJwtToken(data: { username: string; id: number }) {
    const payload = { username: data.username, sub: data.id };
    return this.jwtService.sign(payload);
  }
}