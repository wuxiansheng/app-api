import { Injectable } from '@nestjs/common';
import { AuthEntity } from '../auth.entity';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as crypto from 'crypto-js';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  auth: AuthEntity;
  constructor( @InjectRepository(AuthEntity)
               private readonly authRepository: Repository<AuthEntity>) {
  }
 async signIn(): Promise<string> {
  const auth = new AuthEntity();
  auth.password = crypto.MD5('123').toString();
  return this.authRepository.save(auth)
    .then(res => {
      return 'create auth ..done!';
    })
    .catch(err => {
      return err;
    });
 }
 async  login(username: string, password: string): Promise<any> {
    this.auth = await this.authRepository.findOne({username});
    if (this.auth !== undefined && this.auth.password === password) {
      return this.createToken(this.auth.username, this.auth.password);
    } else {
      return'登陆失败,账号或者密码不对！';
    }
 }
 async validateUser(username: string): Promise<any> {
    return this.authRepository.findOne({username});
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
  async createToken(username: string, password: string): Promise<any> {
    const auth = { username, password};
    return jwt.sign(auth, 'secretKey', { expiresIn: 3600});
  }
}
