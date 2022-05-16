import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }

  async update(user: User): Promise<UpdateResult> {
    return await this.userRepository.update(user.id, user);
  }


}
