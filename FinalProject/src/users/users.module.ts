import {Module, NestModule, RequestMethod, MiddlewareConsumer} from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {UsersMiddleware} from "./users.middleware";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, UsersMiddleware],
})

export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(UsersMiddleware).forRoutes({
      path: 'users',
      method: RequestMethod.ALL,
    })
  }
}
