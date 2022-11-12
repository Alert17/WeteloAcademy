import { Injectable } from '@nestjs/common';
const { admins } = require('../databases/admins');
const { customers } = require('../databases/customers');
const { sellers } = require('../databases/sellers');

@Injectable()
export class UsersRepository {
    async findAdmins() {
        return admins;
    }

    async findCustomers() {
        return customers;
    }

    async findSellers() {
        return sellers;
    }

}
