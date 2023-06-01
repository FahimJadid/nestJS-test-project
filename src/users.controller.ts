import { Controller, Get, Post, Put, Delete, Patch, Req } from '@nestjs/common';
import { of } from 'rxjs';
import { Request } from 'express';

// @Controller('/users')
// export class UsersController {
//   @Get('/profile')
//   getProfile(@Req() req: Request) {
//     console.log(req);
//     return of({
//       hello: 'Jadid',
//     });
//   }
// }

@Controller('/users')
export class UsersController {
  @Post('/profile')
  getProfile(@Req() req: Request) {
    return of({
      hello: 'Jadid',
    });
  }
}
