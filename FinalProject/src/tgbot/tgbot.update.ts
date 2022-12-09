import {Hears, InjectBot, Start, Update} from "nestjs-telegraf";
import {Telegraf, Context} from "telegraf";
import {TgbotService} from "./tgbot.service";


@Update()
export class TgbotUpdate {
    constructor(@InjectBot() private readonly bot: Telegraf<Context>,
                private readonly botService: TgbotService) {
    }

    @Start()
    async startCommand(ctx: Context) {
        await ctx.reply('Hi')
    }

    @Hears('/users')
    async writeUsers(ctx: Context) {
        const users = this.botService.getUsers()
        await ctx.reply('users: ' + users[0])
    }

}
