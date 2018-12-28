import { Injectable } from '@nestjs/common';
import { IUserService } from 'src/users/interfaces/user-service.interface';
import { User } from './../../interfaces/user.interface';

@Injectable()
export class UsersService implements IUserService {
    private static users: User[] = [
        {
            id: 1,
            name: 'wuxiansheng',
            age: 18,
        },
        {
            id: 2,
            name: 'wuxiansheng123',
            age: 20,
        },
        {
            id: 3,
            name: 'wuxianshengqq',
            age: 30,
        },
    ];
    async findAll(): Promise<User[]> {
        return UsersService.users;
    }
    async findOne(id: number): Promise<User> {
        return UsersService.users.find(user => user.id === id);
    }
    async create(user: User): Promise<User> {
        //
        UsersService.users.push(user);
        return user;
    }
    async edit(user: User): Promise<User> {
        //
        const index = UsersService.users.findIndex(item => item.id === user.id);
        if (index >= 0) {
            UsersService.users[index] = user;
        }
        return UsersService.users[index];
    }
    async remove(id: number): Promise<boolean> {
        //
        const index = UsersService.users.findIndex(item => item.id === id);
        if (index >= 0 ) {
            UsersService.users.splice(index, 1);
        }
        return index >= 0;
    }
}
