import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { User } from 'src/typeorm/entities/User';
import { Article } from 'src/typeorm/entities/Article';
import { AuthService } from 'src/auth/auth.service';
import { AbilityModule } from 'src/casl/ability.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, Article]), AbilityModule],
  controllers: [UsersController],
  providers: [UsersService, AuthService, JwtService],
  exports: [UsersService],
})
export class UsersModule {}
