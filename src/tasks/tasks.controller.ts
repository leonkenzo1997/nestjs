import { CreateTaskDTO } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from './tasks.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(
    // @Body('title') title: string,
    // @Body('description') description: string,
    @Body() createTaskDTO: CreateTaskDTO,
  ) {
    console.log('createTaskDTO', createTaskDTO);
    // console.log('title', title);
    // console.log('description', description);
    return this.tasksService.createTask(createTaskDTO);
  }
}
