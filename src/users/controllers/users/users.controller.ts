import { UsersService } from './../../services/users/users.service';
import { CreateUserDto } from './../../dtos/CreateUser.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { AbilityFactory } from 'src/casl/ability.factory';

@Controller('users')
export class UsersController {
  constructor(
    private userservice: UsersService,
    private abilityFactory: AbilityFactory,
  ) {}

  @Get()
  getUsers() {
    return this.userservice.findUsers();
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createUsers(@Body() createUserDot: CreateUserDto) {
    await this.userservice.createUser(createUserDot);
  }

  @Put(':id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    await this.userservice.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.userservice.deleteUser(id);
  }
}
