import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
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
}
