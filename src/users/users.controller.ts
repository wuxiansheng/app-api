import { Controller, Get, Post, Put, Delete, Param, Res, HttpStatus } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from './services/users/users.service';

@Controller('api/v1/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
}
    @Get()
    async findAllUser(): Promise<User[]> {
        // 删除
       return await this.usersService.findAll();
    }
    @Get(':id')
    async findOne(@Res() res, @Param() params): Promise<User> {
        const id = parseInt(params.id);
        if (isNaN(id) || typeof id !==  'number' || id <= 0 ) {
            return res.status(HttpStatus.BAD_REQUEST).send({
                errorCode: 10001,
                errorMessage: '用户编码错误',
            });
        }
        return res.status(HttpStatus.OK).send({
            errorCode: 0,
            errorMessage: '请求成功',
            data: await this.usersService.findOne(id),
        });
    }
    @Post()
    async create(): Promise<User> {
    // 创建用户
    return await this.usersService.create(user);
    }
    @Put()
    async edit() {
        // 修改用户
        return await this.usersService.edit();
     }
    @Delete(':id')
    async remove(@Param('id')): Promise<boolean> {
        // 删除已用户
        return await this.usersService.remove(id);
    }

}
