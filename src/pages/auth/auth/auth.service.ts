import { Injectable } from '@nestjs/common';
import { AuthEntity } from '../auth.entity';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  auth: AuthEntity;

  constructor( @InjectRepository(AuthEntity)
               private readonly authRepository: Repository<AuthEntity>) {
  }
 async register(auth: AuthEntity): Promise<AuthEntity> {
    return this.authRepository.create(auth);
 }
 async forgetPsw(): Promise<AuthEntity> {
    return null;
 }
}
