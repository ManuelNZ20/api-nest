import { Injectable } from '@nestjs/common';

// Podemos injectar codigo en cualquier parte de la aplicacion
// y podemos crear servicios para compartir logica entre controladores
// Podríamos usar funciones que consulten a una base de datos o a otro backend
@Injectable()
export class TasksService {
  getTasks = () => ['Task 1', 'Task 2', 'Task 3'];

  // testing = () => 'Testing...';
}
