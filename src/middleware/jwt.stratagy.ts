import { Injectable, UnauthorizedException } from '@nestjs/common';
import {Strategy, ExtractJwt} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';
import { AuthService } from '../pages/auth/auth/auth.service';
import { AuthEntity } from '../pages/auth/auth.entity';
@Injectable()
export class JwtStratagy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      passReqToCallBack: true,
      secretOrKey: 'secretKey',
    });
  }
  async validate(payload: AuthEntity) {
    const user = await  this.authService.validateUser(payload);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
