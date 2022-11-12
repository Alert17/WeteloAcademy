import {Controller, Get, Req} from '@nestjs/common';
import { UsersFactory } from "./users.factory";


@Controller('users')
export class UsersController {
    constructor(private readonly usersFactory: UsersFactory) {
    }

    @Get('*')
    async getUsers(@Req() req: Request): Promise<{ status: boolean, result: [] }> {
        const result = await this.usersFactory.getUsers(req.url);
        return { status: true, result };
    }
}
