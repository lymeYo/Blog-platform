import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserService } from "src/user/user.service";
import { AuthService } from "../auth.service";
import { jwtConstants } from "../constants";



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private userService: UserService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    const cond = { username: payload.username, id: payload.sub };

    const {password, ...user}    = await this.userService.findOneById(cond.id)
    if(!user) {
      throw new UnauthorizedException('Нет доступа к этому пользователю');
    }
    
    return user;
  }
}