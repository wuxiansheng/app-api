import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
