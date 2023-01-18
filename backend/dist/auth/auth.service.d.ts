import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(username: string, userPassword: string): Promise<any>;
    login(user: UserEntity): Promise<{
        access_token: string;
        id: number;
        username: string;
        email: string;
    }>;
    register(dto: CreateUserDto): Promise<{
        access_token: string;
        username: string;
        email: string;
        id: number;
    }>;
    private generateJwtToken;
}
