import { Repository } from 'typeorm';
import { Task } from './entity/task.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksRepository extends Repository<Task> {}
