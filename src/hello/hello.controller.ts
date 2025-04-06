import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
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

  @Get('ticket/:num') // localhost:3000/number
  getNumber(@Param('num', ParseIntPipe /* Conversion de tipo */) num: number) {
    return num + 23; // localhost:3000/ticket/23
  }
  @Get('active/:status') // localhost:3000/active/true
  @UseGuards(AuthGuard) // Protege la ruta con el guardia de autenticación y autorización cumpliendo la funcion de middleware
  isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
    console.log(typeof status); // localhost:3000/active/true
    return status;
  }

  @Get('greet')
  @UseGuards(AuthGuard) // Protege la ruta con el guardia de autenticación y autorización cumpliendo la funcion de middleware
  greet(@Query(ValidateuserPipe) query: { name: string; age: number }) {
    console.log(typeof query.name); // localhost:3000/greet?name=John&age=23
    console.log(typeof query.age); // localhost:3000/greet?name=John&age=23
    return `Hello  ${query.name}  you are ${query.age + 10}  years old`; // localhost:3000/greet?name=John&age=23
  }
}
