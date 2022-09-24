import { Module } from '@nestjs/common';
import { ArticlesService } from './services/articles/articles.service';
import { ArticlesController } from './controllers/articles/articles.controller';
import { Article } from 'src/typeorm/entities/Article';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticlesService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
