import { Injectable } from '@nestjs/common';
const { adminPath, sellerPath, customerPath} = require('../config')
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersFactory {
    constructor(private readonly usersRepository: UsersRepository) {
    }

    async getUsers(path) {
        switch (path) {
            case adminPath: return this.usersRepository.findAdmins();
            case customerPath: return this.usersRepository.findCustomers();
            case sellerPath: return this.usersRepository.findSellers();
            default:
                return [{error: 'Try to find next roles: admins, customers, sellers'}]
        }
    }

}
