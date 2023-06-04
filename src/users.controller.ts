import { Controller, Get, Param, Query } from '@nestjs/common';

interface QueryParams {
  age: number;
  name: string;
}

@Controller('/users')
export class UsersController {
  @Get('/videos')
  getVideos(@Query() query: QueryParams) {
    console.log(query.age, query.name);
    return 'Success!';
  }
}
