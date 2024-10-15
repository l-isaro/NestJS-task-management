import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Task } from 'src/tasks/entity/task.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'task-management',
  entities: [Task],
  autoLoadEntities: true,
  synchronize: true,
};
