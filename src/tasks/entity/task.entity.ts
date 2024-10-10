import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from '../tasks.model';

export class task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  decription: string;

  @Column()
  status: TaskStatus;
}
