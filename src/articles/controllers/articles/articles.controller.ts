import { CreateArticleDto } from './../../dtos/CreateArticle.dto';
import { ArticlesService } from './../../services/articles/articles.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UpdateArticleDto } from 'src/articles/dtos/UpdateArticle.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private articleService: ArticlesService) {}

  @Get()
  getArticles() {
    return this.articleService.findArticles();
  }

  @Post()
  createArticles(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.createArticle(createArticleDto);
  }

  @Put(':id')
  async updateArticleById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    await this.articleService.updateUser(id, updateArticleDto);
  }

  @Delete(':id')
  async deleteArticleById(@Param('id', ParseIntPipe) id: number) {
    await this.articleService.deleteArticle(id);
  }
}
