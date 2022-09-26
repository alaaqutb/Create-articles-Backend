import { AppController } from './app.controller';
import { Article } from 'src/typeorm/entities/Article';
import { User } from './typeorm/entities/User';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ArticlesModule } from './articles/articles.module';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'article',
      password: 'article123',
      database: 'article_database',
      entities: [User, Article],
      synchronize: true,
    }),
    UsersModule,
    ArticlesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
