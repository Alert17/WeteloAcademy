import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { UsersService } from "./users.service";
import {CreateUserDto} from "./dto/CreateUserDto";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Get()
    async getUsers(): Promise<{ status: boolean, result: [] }> {
        const result = await this.usersService.getUsers();
        return { status: true, result };
    }

    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<{ status: boolean, result: [] }> {
        const result = await this.usersService.getUserById(id);
        return { status: true, result }
    }

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
}
