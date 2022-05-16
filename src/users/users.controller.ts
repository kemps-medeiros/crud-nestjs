import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';



@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async create(@Body() userData: User): Promise<any> {
    return this.usersService.create(userData);
  }

  @Get()
  index(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() userData: User): Promise<any> {
      userData.id = Number(id);
      console.log('Update #' + userData.id)
      return this.usersService.update(userData);
  }  

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.usersService.delete(id);
  }  
}
