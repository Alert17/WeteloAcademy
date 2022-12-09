import { Module } from '@nestjs/common';
import {TgbotUpdate} from "./tgbot.update";
import { TgbotService } from './tgbot.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../users/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [TgbotUpdate, TgbotService]
})
export class TgbotModule {}
