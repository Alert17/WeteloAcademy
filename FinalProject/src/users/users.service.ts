import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import {User} from "./user.entity";


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async getUsers() {

        return this.userRepository.find()
    }

    async getUserById(id) {
        return this.userRepository.findOne({where: { id: id}})
    }

    async createUser(userData) {
        const user = new User()
        user.id = userData.id
        user.name = userData.name
        user.email = userData.email
        user.phone = userData.phone
        user.role = userData.role
        user.isAuth = userData.isAuth

        return await this.userRepository.save(user)
    }

    async setUserAuth(id) {
        return await this.userRepository
            .createQueryBuilder()
            .update(User)
            .set({isAuth: true})
            .where("id = :id", { id: id })
            .execute()
    }

    async deleteUser(id) {
        return await this.userRepository
            .createQueryBuilder()
            .delete()
            .from(User)
            .where("id = :id", { id: id })
            .execute()
    }

    async updateUser(id, userData) {
        return await this.userRepository
            .createQueryBuilder()
            .update(User)
            .set({
                id: userData.id,
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                role: userData.role,
                isAuth: userData.isAuth
            })
            .where("id = :id", { id: id })
            .execute()
    }
}
