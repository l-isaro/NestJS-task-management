import { Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository extends Repository<User> {
  async createUser(createUserDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = createUserDto;
    const user = this.create({ username, password });
    this.save(user);
  }
}
