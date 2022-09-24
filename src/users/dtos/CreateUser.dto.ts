import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';
export class CreateUserDto {
  @IsString()
  username: string;
  @IsNotEmpty()
  @MaxLength(10)
  @IsString()
  password: string;
  @IsEmail()
  @IsString()
  email: string;
}
