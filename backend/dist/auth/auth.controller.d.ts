import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
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
    getProfile(req: any): Promise<any>;
}
