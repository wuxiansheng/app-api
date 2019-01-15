import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthEntity } from './auth.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('api/v1/auth/:name')
  async findOne(@Param() params): Promise<AuthEntity> {
    return this.authService.findOne(params.name);
  }
  @Post('api/v1/auth')
  async  create(@Body() auth): Promise<AuthEntity> {
    return null;
  }
  @Get('api/v1/auth/:email')
  async  findByEmail(@Param() params): Promise<AuthEntity> {
    return this.authService.findByEmail(params.email);
  }
  @Get('api/v1/auth/phone')
  async  findByPhone(@Param() params): Promise<AuthEntity> {
    return this.authService.findByPhone(params.phone);
  }
}
