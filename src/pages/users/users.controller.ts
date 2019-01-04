import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { UserEntity } from './user.entity';
import { ApiException } from '../../common/exceptions/api.exception';
import { ApiErrorCode } from '../../common/enums/api-error-code.enum';

@Controller('api/v1/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
    async findAllUser(): Promise<UserEntity[]> {
        // 删除
       return await this.usersService.findAll();
    }
    @Get('/:id')
  async  findById(@Param('id') params ): Promise<UserEntity> {
      const id =  parseInt(params.id);
      if (isNaN(id) || typeof id !== 'number' || id > 0) {
        throw  new ApiException('用户id无效', ApiErrorCode.USER_ID_INVALID, HttpStatus.BAD_REQUEST);
      }
      return await  this.usersService.findById(id);
    }
    @Post()
  async  create(@Body() user): Promise<UserEntity> {
      return null;
    }
    @Put()
  async editUser(id: number) {
      return await  this.usersService.update(id);
    }
    @Delete()
  async deleteUser(id: number) {
      return await  this.usersService.delet(id);
    }
}
