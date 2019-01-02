import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesController } from './articles/articles.controller';
import { UsersModule } from './users/users.module';
import { RabcController } from './rabc/rabc.controller';
import { AdminController } from './admin/admin.controller';
import { CommentController } from './comment/comment.controller';
import { MemberController } from './member/member.controller';
import { AuthController } from './auth/auth.controller';
import { CompanyController } from './company/company.controller';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'wxs3430569',
    database: 'nestdb',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  })],
  controllers: [AppController, ArticlesController, RabcController, AdminController,
    CommentController, MemberController, AuthController, CompanyController],
  providers: [AppService],
})
export class AppModule {}
