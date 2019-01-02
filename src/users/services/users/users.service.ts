import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { UserEntity } from '../../user.entity';
import {Repository} from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
      @InjectRepository(UserEntity)
      private  readonly userRepository: Repository<UserEntity>,
    ) { }
    async findAll(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }
}
