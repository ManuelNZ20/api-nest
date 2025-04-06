import { Controller, Get } from '@nestjs/common';

// @Controller('hello') // localhost:3000/hello: Para acceder a esta ruta
@Controller()
export class HelloController {
  @Get('/')
  index() {
    return 'Home Page';
  }
}
