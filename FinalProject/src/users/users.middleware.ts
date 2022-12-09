import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (req.headers.token !== process.env.SECRET_TOKEN_FOR_ADMINS && req.method !== 'POST') {
      return res.status(401).json({ success: false, message: 'Only admins have access for this command' });
    }
    next();
  }
}
