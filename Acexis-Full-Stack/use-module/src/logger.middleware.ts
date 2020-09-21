import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class Logger1Middleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('Handling middleware1...');
    setTimeout(() => {
      console.log('Done1')
      next();
    }, 3000);
  }
}

@Injectable()
export class Logger2Middleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('Handling middleware2...');
    setTimeout(() => {
      console.log('Done2')
      next();
    }, 3000);
  }
}

//functional middleware
export function logger(req, res, next) {
  console.log(`Request...`);
  next();
};
