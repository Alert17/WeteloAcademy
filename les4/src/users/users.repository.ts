import { Injectable } from '@nestjs/common';
import {findIndex} from "rxjs";
const { users } = require('../database');

@Injectable()
export class UsersRepository {
    async find({ id }) {
        return id ? users.filter(u => u.id === id) : users;
    }

    async createUser({ dto }) {
        const user = {id: dto.id, name: dto.name}
        users.push(user)
    }

    async updateUser({id, name}) {
        const index = users.findIndex(u => u.id === id)
        users[index].name = name
    }

    async deleteUser({id}) {
        const index = users.findIndex(u => u.id === id)
        users.splice(index, 1)
    }
}
