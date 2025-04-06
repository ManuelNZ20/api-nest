import { Injectable, HttpCode, NotFoundException } from '@nestjs/common';
// import { NotFoundError } from 'rxjs';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

// export interface User {
//   name: string;
//   age: number;
// }

// export interface Task {
//   id: number;
//   title: string;
//   // valor de descripcion opcional
//   description?: string;
//   status: boolean;
// }
// Podemos injectar codigo en cualquier parte de la aplicacion
// y podemos crear servicios para compartir logica entre controladores
// Podríamos usar funciones que consulten a una base de datos o a otro backend
@Injectable()
export class TasksService {
  private tasks: any = [];

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);
    if (!taskFound) {
      // throw new Error('Task not found'); // sino se encuentra la tarea
      return new NotFoundException('Task not found'); // sino se encuentra la tarea
    }
    return taskFound;
  }

  createTask(task: CreateTaskDto) {
    console.log(task);
    this.tasks.push({ ...task, id: this.tasks.length + 1 });
    return task;
  }

  updateTask(task: UpdateTaskDto) {
    console.log(task);
    return 'Actualizando tareas...';
  }

  deleteTask = () => 'Deleting task...';

  updateTaskStatus = () => 'Updating task status...';
  // testing = () => 'Testing...';
}
