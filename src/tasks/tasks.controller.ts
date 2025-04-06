import {
  Controller,
  Delete,
  Patch,
  Get,
  Post,
  Put,
  Body,
  Query,
  Param,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('/tasks')
export class TaskController {
  // Es una funcion cuando la clase se instancia
  tasksService: TasksService;

  constructor(TasksService: TasksService) {
    this.tasksService = TasksService;
  }

  // Obtener datos de una ruta del local host
  // localhost:3000/tasks
  @Get()
  getAllTasks(@Query() query: any) {
    // buscar en una base de datos
    // peticion a otro backend o api
    console.log(query);
    return this.tasksService.getTasks();
  }

  @Get('/:taskId') // localhost:3000/tasks/1
  getTask(@Param('taskId') taskId: string) {
    console.log(taskId);
    return this.tasksService.getTask(parseInt(taskId));
  }
  @Post() // Enviar datos, aquí se extraen los datos del body de la petición
  createTask(@Body() task: CreateTaskDto) {
    // console.log(task);
    return this.tasksService.createTask(task);
  }

  @Put() // Actualizar datos {title: 'title', description: 'description'} -> {title: 'title', description: 'description'}
  updateTask(@Body() task: UpdateTaskDto) {
    return this.tasksService.updateTask(task);
  }

  @Delete() // Eliminar datos
  deleteTask() {
    return this.tasksService.deleteTask();
  }

  @Patch() // Actualiza parte de la tarea {title: 'title', status: false} -> {status: true}
  updateTaskStatus() {
    return this.tasksService.updateTaskStatus();
  }
}
// Aquí podemos definir rutas de url del backend que pueden ser visitadas
