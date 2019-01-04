import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthEntity } from './auth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AuthEntity])],
  providers: [AuthService],
})
export class AuthModule {}
