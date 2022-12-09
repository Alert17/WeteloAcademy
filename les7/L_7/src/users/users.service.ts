import { Injectable } from '@nestjs/common';
import { UserRepository } from './database/user';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {
  }

  async getClients() {
    return this.userRepository.findAll({ type: 'client' });
  }

  async getAdmins() {
    return this.userRepository.findAll({ type: 'admin' });
  }

  async getUserById(id) {
    return this.userRepository.findAll({ id: id });
  }
}
