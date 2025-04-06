import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Permitir solo los datos que se encuentran en el DTO
    }),
  ); // Validar datos de entrada
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
