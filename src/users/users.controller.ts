import { Controller, Get, Post, Put, Delete, Param, Res, HttpStatus, HttpException } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from './services/users/users.service';

@Controller('api/v1/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
    async findAllUser(): Promise<User[]> {
        // 删除
       return await this.usersService.findAll();
    }
    @Get(':id')
    async findOne(@Param() params): Promise<User> {
        const id = parseInt(params.id);
        if (isNaN(id) || typeof id !==  'number' || id <= 0 ) {
           throw new HttpException('用户编号错误', HttpStatus.BAD_REQUEST);
    }
        return await this.usersService.findOne(id);
 }
}
