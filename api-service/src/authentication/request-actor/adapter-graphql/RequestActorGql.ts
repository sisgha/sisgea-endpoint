import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const RequestActorGql = createParamDecorator((_data: unknown, context: ExecutionContext) => {
  const ctx = GqlExecutionContext.create(context);
  const request = ctx.getContext().req;
  return request.user ?? null;
});

/**
 * @deprecated use RequestActorGql
 */
export const UsuarioDaRequisicaoGql = RequestActorGql;