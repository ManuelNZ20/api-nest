import { Injectable } from '@nestjs/common';

export interface User {
  name: string;
  age: number;
}

export interface Task {
  id: number;
  title: string;
  // valor de descripcion opcional
  description?: string;
  status: boolean;
}
// Podemos injectar codigo en cualquier parte de la aplicacion
// y podemos crear servicios para compartir logica entre controladores
// Podríamos usar funciones que consulten a una base de datos o a otro backend
@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private counter: number = 0;

  getTasks(): Task[] {
    return this.tasks;
  }

  createTask = (task: any) => {
    console.log(task);
    this.tasks.push({ id: this.counter++, ...task });
    return task;
  };

  updateTask = () => 'Updating task...';

  deleteTask = () => 'Deleting task...';

  updateTaskStatus = () => 'Updating task status...';
  // testing = () => 'Testing...';
}
