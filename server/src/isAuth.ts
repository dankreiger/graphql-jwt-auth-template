import { MiddlewareFn } from 'type-graphql';
import { ServerContext } from './ServerContext';
import { verify } from 'jsonwebtoken';

export const isAuth: MiddlewareFn<ServerContext> = ({ context }, next) => {
  const authorization = context.req.headers['authorization'];
  if (!authorization) {
    throw new Error('not authenticated');
  }
  try {
    // bearer 190333838hdkdjh
    const token = authorization.split(' ')[1];
    const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
    context.payload = payload as any;
  } catch (error) {
    console.log(error);
    throw new Error('not authenticated');
  }
  return next();
};
