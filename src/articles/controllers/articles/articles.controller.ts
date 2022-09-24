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
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: CreateArticleDto,
  ) {
    await this.articleService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.articleService.deleteArticle(id);
  }
}
