import { Controller, Get, Param } from '@nestjs/common';

interface videoParams {
  id: number;
  name: string;
}

@Controller('/users')
export class UsersController {
  @Get('/videos/:id/:name')
  getVideos(@Param() params: videoParams) {
    console.log(params.id);
    console.log(params.name);
    return 'Success!';
  }
}
