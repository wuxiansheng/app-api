import { Injectable } from '@nestjs/common';
import { AuthEntity } from '../auth.entity';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../users/user.entity';

@Injectable()
export class AuthService {
  constructor( @InjectRepository(AuthEntity)
               private readonly authRepository: Repository<AuthEntity>) {
  }
 async register(): Promise<string> {
  const auth = new AuthEntity();
  const users = new UserEntity();
  return this.authRepository.save(auth)
    .then(res => {
      return 'create auth ..done!';
    })
    .catch(err => {
      return err;
    });
 }
 async forgetPsw(): Promise<AuthEntity> {
    return null;
 }
 // 通过用户名查询用户
 async findOne(username: string): Promise<AuthEntity> {
    return await  this.authRepository.findOne(username);
 }
 // 通过邮箱查询用户
  async  findByEmail(email: string): Promise<AuthEntity> {
    return await  this.authRepository.findOne(email);
  }
  // 通过手机查询用户
  async findByPhone(phone: number): Promise<AuthEntity> {
    return this.authRepository.findOne(phone);
  }
  // token
  async token(): Promise<AuthEntity> {
    return await this.authRepository.create();
  }
}
