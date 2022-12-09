import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";

import {Repository} from "typeorm";
import {User} from "../users/user.entity";

@Injectable()
export class TgbotService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async getUsers() {
        return this.userRepository.find()
    }
}

