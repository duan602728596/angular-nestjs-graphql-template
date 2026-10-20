import type { ExecutionContext } from '@nestjs/common'
import type { Reflector } from '@nestjs/core'
import type { Request } from 'express'
import type { IGraphQLContext } from '../../modules/graphql/graphql.interface.ts'
import { jest } from '@jest/globals'
import { GqlExecutionContext } from '@nestjs/graphql'
import { TokenExceptionMessageEnum } from './token.enum.ts'
import { TokenGuard } from './token.guard.ts'

describe('tokenGuard', (): void => {
  let tokenGuard: TokenGuard
  let context: jest.Mocked<Pick<ExecutionContext, 'getHandler' | 'getClass' | 'getType'>>
  let reflector: jest.Mocked<Pick<Reflector, 'getAllAndOverride'>>

  /**
   * 创建一个graphql的ctx
   * @param {string} [authorization]
   * @return {GqlExecutionContext}
   */
  function createGraphQLContext(authorization?: string): GqlExecutionContext {
    return {
      getContext(): IGraphQLContext {
        return {
          req: {
            headers: authorization ? {
              authorization: `Bearer ${authorization}`,
            } : {},
          } as unknown as Request,
        }
      },
    } as GqlExecutionContext
  }

  beforeEach((): void => {
    reflector = {
      getAllAndOverride: jest.fn().mockReturnValue(false),
    }
    context = {
      getHandler: jest.fn(),
      getClass: jest.fn<any>(),
      getType: jest.fn<any>().mockReturnValue('graphql'),
    }
    tokenGuard = new TokenGuard(reflector as unknown as Reflector)
  })

  it('should be defined', (): void => {
    expect(tokenGuard).toBeDefined()
  })

  it('should IS_TOKEN_PUBLIC_KEY return true', (): void => {
    reflector = {
      getAllAndOverride: jest.fn().mockReturnValue(true),
    }
    tokenGuard = new TokenGuard(reflector as unknown as Reflector)
    expect(tokenGuard.canActivate(context as unknown as ExecutionContext)).toBeTruthy()
  })

  it('should throw missing authorization execution', (): void => {
    jest.spyOn(GqlExecutionContext, 'create').mockReturnValue(createGraphQLContext(undefined))
    expect(
      (): boolean => tokenGuard.canActivate(context as unknown as ExecutionContext),
    ).toThrow(TokenExceptionMessageEnum.Missing)
  })

  it('should throw invalid execution', (): void => {
    jest.spyOn(GqlExecutionContext, 'create').mockReturnValue(createGraphQLContext('2'))
    expect(
      (): boolean => tokenGuard.canActivate(context as unknown as ExecutionContext),
    ).toThrow(TokenExceptionMessageEnum.Invalid)
  })

  it('should verify success', (): void => {
    jest.spyOn(GqlExecutionContext, 'create').mockReturnValue(createGraphQLContext('123456'))
    expect(
      (): boolean => tokenGuard.canActivate(context as unknown as ExecutionContext),
    ).toBeTruthy()
  })
})
