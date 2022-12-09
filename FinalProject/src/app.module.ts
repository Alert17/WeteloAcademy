import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {DataBaseModule} from "./database/db.module";
import { UsersModule } from './users/users.module';
import {TelegrafModule} from "nestjs-telegraf";
import { TgbotModule } from './tgbot/tgbot.module';
import { PostsModule } from './posts/posts.module';
require('dotenv')

@Module({
  imports: [ConfigModule.forRoot(), DataBaseModule, UsersModule,
  TelegrafModule.forRoot({
    token: '5825477926:AAHAoWnLjMmDLadH_6dnu_s7cAyVCdDNhgY'
  }),
  TgbotModule,
  PostsModule],
})

export class AppModule {}
