import { Article } from './../../../typeorm/entities/Article';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateArticleParams, UpdateArticleParams } from 'src/utills/types';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
  ) {}

  findArticles() {
    return this.articleRepository.find();
  }

  createArticle(articleDetails: CreateArticleParams) {
    const newArticle = this.articleRepository.create({
      ...articleDetails,
      createdAt: new Date(),
    });
    return this.articleRepository.save(newArticle);
  }

  updateUser(id: number, updateArticleDetails: UpdateArticleParams) {
    return this.articleRepository.update(
      { id },
      { ...updateArticleDetails, updatedAt: new Date() },
    );
  }

  deleteArticle(id: number) {
    return this.articleRepository.delete({ id });
  }
}
