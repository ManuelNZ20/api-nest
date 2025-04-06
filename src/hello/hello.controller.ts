import { Controller, Get, HttpCode, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
// @Controller('hello') // localhost:3000/hello: Para acceder a esta ruta
@Controller()
export class HelloController {
  @Get('/hello')
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url); // localhost:3000/hello
    response.status(200).json({
      message: 'Hello World!',
    });
  }
  @Get('notfound') // localhost:3000/notFound
  @HttpCode(404) // Cambia el código de estado de la respuesta a 404 indicando que no se encontró la página
  notFoundPage() {
    return '404 not found';
  }

  @Get('new') // localhost:3000/somethingNew
  @HttpCode(201) // Cambia el código de estado de la respuesta a 201 indicando que se ha creado un nuevo recurso
  someThingNew() {
    return 'Something new';
  }

  @Get('error')
  @HttpCode(500) // Cambia el código de estado de la respuesta a 500 indicando que hubo un error interno del servidor
  errorPage() {
    return 'Error route';
  }
}
