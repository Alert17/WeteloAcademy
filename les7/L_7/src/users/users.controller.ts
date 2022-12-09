import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get('clients')
  async getClients(): Promise<{ status: boolean, result: [] }> {
    const result = await this.usersService.getClients();
    return { status: true, result };
  }

  @Get('admins')
  async getAdmins(): Promise<{ status: boolean, result: [] }> {
    const result = await this.usersService.getAdmins();
    return { status: true, result };
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<{ status: boolean, result: [] }> {
    const result = await this.usersService.getUserById(id);
    return { status: true, result }
  }
/*
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto)
  }

  @Patch(':id')
  async update(
      @Param('id') id: string,
      @Body('name') name: string
  ) {
    return this.usersService.updateUser(id, name)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.usersService.deleteUser(id)
  }
  */

}
