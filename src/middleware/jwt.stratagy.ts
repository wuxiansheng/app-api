import { Injectable } from '@nestjs/common';
import {Strategy} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';
import { AuthService } from '../pages/auth/auth/auth.service';
@Injectable()
export class JwtStratagy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      
    });
  }
}
