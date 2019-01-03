import { Controller, Get, Post, Put, Delete, Param, Res, HttpStatus, HttpException } from '@nestjs/common';
import { UsersService } from './services/users/users.service';
import { UserEntity } from './user.entity';

@Controller('api/v1/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
    async findAllUser(): Promise<UserEntity[]> {
        // 删除
       return await this.usersService.findAll();
    }
    @Get('/:id')
  async  findById(@Param('id')id): Promise<UserEntity> {
      return await  this.usersService.findById(id);
    }
}