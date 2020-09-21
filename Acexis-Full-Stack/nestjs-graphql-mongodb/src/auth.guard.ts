import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import jwt = require('jsonwebtoken');
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const ctx = GqlExecutionContext.create(context);
      const req = ctx.getContext().req;
      const token = req && req.headers.authorization.split(' ');
      if (token[0] !== 'Bearer') {
        return false;
      } else {
        const payload = jwt.verify(token[1], 'dhuynh')
        req.username = payload['username'];
        console.log('PAYLOAD: ', req.username);
        //console.log("UserID when create mesage: ", req.userID)
        return true;
      }
    } catch (err) {
      return false;
    }
  }
}