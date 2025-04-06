import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
// @Controller('hello') // localhost:3000/hello: Para acceder a esta ruta
@Controller()
export class HelloController {
  @Get('/')
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url); // localhost:3000/hello
    response.status(200).json({
      message: 'Hello World!',
    });
  }
}
