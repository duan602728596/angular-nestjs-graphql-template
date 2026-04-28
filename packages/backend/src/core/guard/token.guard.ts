import { CanActivate, Injectable, UnauthorizedException, type ExecutionContext, type ContextType } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

interface IRequest {
  headers: Record<string, string | undefined>
}

/* token验证 */
@Injectable()
export class TokenGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    if (context.getType<ContextType | 'graphql'>() !== 'graphql') {
      return true;
    }

    const ctx: GqlExecutionContext = GqlExecutionContext.create(context);
    const req: IRequest = ctx.getContext().req;
    const token: string | undefined = req.headers.authorization;

    if (!token) {
      throw new UnauthorizedException('Missing Authorization');
    }

    const [tokenKey, tokenValue]: Array<string> = token.split(/\s+/);

    if (tokenKey.toLowerCase() !== 'bearer' || tokenValue !== '123456') {
      throw new UnauthorizedException('Invalid token');
    }

    return true;
  }
}