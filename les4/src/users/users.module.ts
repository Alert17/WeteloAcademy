import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {UsersService} from './users.service';
import {UsersController} from "./users.controller";
import {UsersRepository} from "./users.repository";
import {UsersMiddleware} from "./users.middleware";

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepository]
})

export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
        .apply(UsersMiddleware)
        .forRoutes('users/:id')
        .apply(UsersMiddleware)
        .forRoutes({
          path: 'users',
          method: RequestMethod.POST
        })
  }
}
