import { Inject, Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { CONNECTION } from '../../tenancy/tenancy.symbols';

@Injectable()
export class UsersService {
  private readonly usersRepository: Repository<User>;

  constructor(
    @Inject(CONNECTION) connection: Connection,
  ) {
    this.usersRepository = connection.getRepository(User);
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.name = createUserDto.name;

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
