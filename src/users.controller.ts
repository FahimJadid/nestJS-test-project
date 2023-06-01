import {
  Controller,
  Post,
  Req,
  HttpCode,
  HttpStatus,
  Res,
  // Header,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/users')
export class UsersController {
  @Post('/profile')
  // @Header('Cache-Control', 'none')
  // @Header('X-name', 'jadid')
  @HttpCode(HttpStatus.NO_CONTENT)
  getProfile(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    res.status(200);
    return {
      hello: 'Jadid',
    };
  }
}
