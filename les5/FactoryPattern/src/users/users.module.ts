import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersFactory } from './users.factory';
import {UsersRepository} from "./users.repository";

@Module({
  controllers: [UsersController],
  providers: [UsersFactory, UsersRepository]
})
export class UsersModule {}
