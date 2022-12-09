import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class PostsMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if ((req.headers.role !== 'ADMIN' || req.headers.role !== 'AUTHOR') &&
        (req.method === 'PUT' || req.method === 'DELETE')) {
      return res.status(401).json({ success: false, message: 'Only admins and authors have access for this command' });
    }

    switch (req.method) {
      case 'POST':
        if (req.headers.token !== process.env.SECRET_TOKEN_FOR_AUTH_USER) {
          return res.status(401).json({ success: false, message: 'Only authorized users have access for this command' });
        }
        break
      case 'PUT':
        if (req.headers.token !== process.env.SECRET_TOKEN_FOR_ADMINS ||
            req.headers.token !== process.env.SECRET_TOKEN_FOR_AUTHOR) {
          return res.status(401).json({ success: false, message: 'Only author and admins have access for this command' });
        }
        break
      case 'DELETE':
        if (req.headers.token !== process.env.SECRET_TOKEN_FOR_ADMINS ||
            req.headers.token !== process.env.SECRET_TOKEN_FOR_AUTHOR) {
          return res.status(401).json({ success: false, message: 'Only author and admins have access for this command' });
        }
        break
    }

    next();
  }
}
