import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { UserEntity } from './user.entity';
import { ApiException } from '../../common/exceptions/api.exception';
import { ApiErrorCode } from '../../common/enums/api-error-code.enum';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
@ApiUseTags('用户')
@ApiBearerAuth()
@Controller('api/v1/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
    async findAllUser(): Promise<UserEntity[]> {
        // 删除
       return await this.usersService.findAll();
    }
    @Get(':id')
  async  findById(@Param('id') id ): Promise<UserEntity> {
      const userId =  parseInt(id);
      if (isNaN(userId) || typeof userId !== 'number' || userId > 0) {
        throw  new ApiException('用户id无效', ApiErrorCode.USER_ID_INVALID, HttpStatus.BAD_REQUEST);
      }
      return await  this.usersService.findById(id);
    }
    @Put(':id')
  async editUser(@Param()id, @Body() user: UserEntity) {
      return await this.usersService.update(id);
    }
    @Delete(':id')
  async deleteUser(@Param('id')id) {
      return await  this.usersService.delet(id);
    }
}
