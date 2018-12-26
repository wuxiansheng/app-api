import { Injectable } from '@nestjs/common';
import { IUserService } from 'src/users/interfaces/user-service.interface';
import { User } from './../../interfaces/user.interface';

@Injectable()
export class UsersService implements IUserService {
    async findAll(): Promise<User[]> {
        return [];
    }
    async findOne(id: number): Promise<User> {
        return {
            id,
            name: 'daming',
            age: 18,
        };
    }
    async create() {
        //
    }
    async edit() {
        //
    }
    async remove() {
        //
    }
}
