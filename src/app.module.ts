import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ArticlesController } from './articles/articles.controller';
import { UsersService } from './users/services/users/users.service';
import { UsersModule } from './users/users.module';
import { RabcController } from './rabc/rabc.controller';
import { AdminController } from './admin/admin.controller';
import { CommentController } from './comment/comment.controller';
import { MemberController } from './member/member.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, ArticlesController, RabcController, AdminController, CommentController, MemberController],
  providers: [AppService],
})
export class AppModule {}
