import { Repository } from 'typeorm';
import { Task } from './entity/task.entity';

export class TasksRepository extends Repository<Task> {}
