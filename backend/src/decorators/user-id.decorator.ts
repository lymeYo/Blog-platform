import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const UserId = createParamDecorator((_: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest()
  // console.log(request);
  return request.user.id
})