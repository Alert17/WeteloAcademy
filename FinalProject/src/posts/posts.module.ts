import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import  {PostsMiddleware} from "./posts.middleware";
import {Posts} from "./posts.entity";


@Module({
  imports: [TypeOrmModule.forFeature([Posts])],
  providers: [PostsService],
  controllers: [PostsController]
})

export class PostsModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(PostsMiddleware).forRoutes({
      path: 'posts',
      method: RequestMethod.ALL,
    })
  }
}
