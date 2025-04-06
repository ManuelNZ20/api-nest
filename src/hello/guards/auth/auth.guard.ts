import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Es un intermediario entre el controlador y la ruta
    // Se ejecuta antes de que se ejecute el controlador
    // Sirve para comprobar roles, permisos, autenticación, etc.
    // Si la sesión del usuario tiene un rol se continua con la ejecución del controlador
    const request = context.switchToHttp().getRequest() as Request;
    console.log(request.url);
    // console.log(request.method);
    // if (request.url === '/greet') return false;
    if (!request.headers['authorization'] /* ==='abc' */) return false;
    return true;
  }
}
