import {Body, Controller, Delete, Get, Param, Patch, Post, Put} from '@nestjs/common';
import {UsersService} from "./users.service";
import {User} from "./user.entity";
import {UserDto} from "./dto/UserDto";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {
    }

    @Post()
    async createUser(@Body() createUserDto: UserDto) {
        return this.userService.createUser(createUserDto)
    }

    @Get()
    async getUsers(): Promise<{status: boolean, result: User[] }> {
        const result = await this.userService.getUsers();
        return {status: true, result}
    }

    @Get(':id')
    async getUserById(@Param('id') id: number): Promise<{ status: boolean, result: User }> {
        const result = await this.userService.getUserById(id)
        return { status: true, result}
    }

    @Patch(':id')
    async setUserAuth(@Param('id') id: number) {
        return this.userService.setUserAuth(id)
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
        return this.userService.deleteUser(id)
    }

    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() updateUserDto: UserDto) {
        return this.userService.updateUser(id, updateUserDto)
    }
}
