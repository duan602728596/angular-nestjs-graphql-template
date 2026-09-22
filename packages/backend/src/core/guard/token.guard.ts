import {
  CanActivate,
  Injectable,
  SetMetadata,
  UnauthorizedException,
  type ExecutionContext,
  type ContextType,
  type CustomDecorator,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'

interface IRequest {
  headers: Record<string, string | undefined>
}

const IS_TOKEN_PUBLIC_KEY: string = 'isTokenGuardPublic'

/**
 * 不需要token验证
 * @constructor
 */
export function TokenGuardPublic(): CustomDecorator {
  return SetMetadata(IS_TOKEN_PUBLIC_KEY, true)
}

/* token验证 */
@Injectable()
export class TokenGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    if (this.reflector.getAllAndOverride<boolean>(IS_TOKEN_PUBLIC_KEY, [context.getHandler(), context.getClass()]))
      return true

    if (context.getType<ContextType | 'graphql'>() !== 'graphql') {
      return true
    }

    const ctx: GqlExecutionContext = GqlExecutionContext.create(context)
    const req: IRequest = ctx.getContext().req
    const token: string | undefined = req.headers.authorization

    if (!token) {
      throw new UnauthorizedException('Missing Authorization')
    }

    const [tokenKey, tokenValue]: Array<string> = token.split(/\s+/)

    if (tokenKey.toLowerCase() !== 'bearer' || tokenValue !== '123456') {
      throw new UnauthorizedException('Invalid token')
    }

    return true
  }
}
