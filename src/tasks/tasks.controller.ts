import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller()
export class TaskController {
  // Es una funcion cuando la clase se instancia
  tasksService: TasksService;

  constructor(TasksService: TasksService) {
    this.tasksService = TasksService;
  }

  // Obtener datos de una ruta del local host
  // localhost:3000/tasks
  @Get('/tasks')
  getAllTasks() {
    // buscar en una base de datos
    // peticion a otro backend o api
    return this.tasksService.getTasks();
  }
}
// Aquí podemos definir rutas de url del backend que pueden ser visitadas
