import { Module, NestModule, MiddlewareConsumer, RequestMethod } from "@nestjs/common";
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { database, repositories } from './database';
import { UsersMiddleware } from './users.middleware';

@Module({
  imports: [...database],
  controllers: [UsersController],
  providers: [UsersService, UsersMiddleware, ...repositories]
})

export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(UsersMiddleware).forRoutes({
      path: 'users/admins',
      method: RequestMethod.GET
    })
  }
}
