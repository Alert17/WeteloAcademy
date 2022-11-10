import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
const { users } = require('../database')

@Injectable()
export class UsersMiddleware implements NestMiddleware {

  use(req: Request, res: Response, next: () => void) {
    const index = users.findIndex(u => u.id === req.params.id)

    if (req.method === 'POST')  {
      const postIndex = users.findIndex(u => u.id === req.body.id)
      if (postIndex !== -1) {
        return res.status(405).json({success: false, message: 'User with this ID already exists'});
      }
    } else if (index === -1) {
      return res.status(404).json({success: false, message: 'User is not found'});
    }
    next();
  }

}
