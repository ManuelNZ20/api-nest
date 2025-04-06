import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/users')
  getUsers() {
    return this.usersService.getUsers();
  }
  @Get('/users/:userId')
  getUser(@Param('userId') userId: string) {
    return this.usersService.getUser(parseInt(userId));
  }
  @Post('/users')
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }
}
