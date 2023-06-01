import { Controller, Post, Req, Header, HttpCode } from '@nestjs/common';
import { Request } from 'express';

@Controller('/users')
export class UsersController {
  @Post('/profile')
  @Header('Cache-Control', 'none')
  @Header('X-name', 'jadid')
  @HttpCode(200)
  getProfile(@Req() req: Request) {
    return {
      hello: 'Jadid',
    };
  }
}
