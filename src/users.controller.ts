import {
  Controller,
  Post,
  Req,
  Get,
  Header,
  HttpCode,
  Redirect,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('/users')
export class UsersController {
  @Post('/profile')
  @Redirect('/users/account', 302)
  getProfile(@Req() req: Request) {
    return {
      hello: 'Jadid',
    };
  }

  @Get('/account')
  redirectRoute() {
    return 'Redirected Account';
  }
}
