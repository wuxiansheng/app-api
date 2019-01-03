import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';

@Injectable()
export  class Loggermiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return(req, res, next) => {
      console.log('Request...');
      next();
    };
  }
}
