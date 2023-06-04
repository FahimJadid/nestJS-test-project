import { Controller, Get, Param, Query, Headers } from '@nestjs/common';

interface QueryParams {
  age: number;
  name: string;
}

@Controller('/users')
export class UsersController {
  @Get('/videos')
  getVideos(@Headers('user-agent') headers: Record<string, any>) {
    console.log(headers);
    return 'Success!';
  }
}
