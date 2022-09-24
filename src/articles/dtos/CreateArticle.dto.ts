import { IsNotEmpty, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  articleName: string;
  @IsString()
  @IsNotEmpty()
  authorName: string;
}
