import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: any = [
    {
      id: 1,
      name: 'John Doe',
      phone: '1234567890',
    },
    {
      id: 2,
      name: 'Jane Doe',
      phone: '0987654321',
    },
    {
      id: 3,
      name: 'Jim Doe',
      phone: '1122334455',
    },
    {
      id: 4,
      name: 'Jack Doe',
      phone: '5566778899',
    },
  ];

  getUsers = () => this.users;

  getUser(id: number) {
    const userFound = this.users.find((user) => user.id === id);
    if (!userFound) {
      return new Error('User not found'); // sino se encuentra el usuario
    }
    return userFound;
  }
  createUser(user: CreateUserDto) {
    this.users.push(user);
    return { ...user, id: this.users.length + 1 };
  }
}
