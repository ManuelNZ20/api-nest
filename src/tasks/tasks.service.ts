import { Injectable } from '@nestjs/common';

export interface User {
  name: string;
  age: number;
}

// Podemos injectar codigo en cualquier parte de la aplicacion
// y podemos crear servicios para compartir logica entre controladores
// Podríamos usar funciones que consulten a una base de datos o a otro backend
@Injectable()
export class TasksService {
  getTasks(): User {
    return {
      name: 'John Doe',
      age: 30,
    };
  }

  createTask = () => 'Creating task...';

  updateTask = () => 'Updating task...';

  deleteTask = () => 'Deleting task...';

  updateTaskStatus = () => 'Updating task status...';
  // testing = () => 'Testing...';
}
