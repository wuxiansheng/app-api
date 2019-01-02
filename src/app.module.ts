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
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { RabcModule } from './rabc/rabc.module';
import { MemberModule } from './member/member.module';
import { ArticlesModule } from './articles/articles.module';
import { CompanyModule } from './company/company.module';

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
  }), AdminModule, AuthModule, CommentModule, RabcModule, MemberModule, ArticlesModule, CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
