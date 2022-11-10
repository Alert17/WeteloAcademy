import { Injectable } from '@nestjs/common';
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {
    }

    async getUsers() {
        return this.usersRepository.find({ id: 0 });
    }

    async getUserById(id) {
        return this.usersRepository.find({ id: id });
    }

    async createUser(createUserDto) {
        return this.usersRepository.createUser({ dto: createUserDto })
    }

    async updateUser(id, name) {
        return this.usersRepository.updateUser({id: id, name: name})
    }

    async deleteUser(id) {
        return this.usersRepository.deleteUser({id: id})
    }
}
