import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];

  @Get()
  getAllTasks() {
    return this.tasks;
  }
}
