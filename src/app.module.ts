import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './pages/users/users.module';
import { AdminModule } from './pages/admin/admin.module';
import { AuthModule } from './pages/auth/auth.module';
import { CommentModule } from './pages/comment/comment.module';
import { RabcModule } from './pages/rabc/rabc.module';
import { MemberModule } from './pages/member/member.module';
import { ArticlesModule } from './pages/articles/articles.module';
import { CompanyModule } from './pages/company/company.module';
import { CustomerController } from './pages/customer/customer.controller';
import { ProductController } from './pages/product/product.controller';
import { ConfigModule } from './config/config.module';


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
  }), AdminModule, AuthModule, CommentModule, RabcModule, MemberModule, ArticlesModule, CompanyModule, ConfigModule],
  controllers: [AppController, CustomerController, ProductController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply();
  }
}
