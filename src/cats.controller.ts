import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { HttpCode } from '@nestjs/common';
import { Header } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(201)
  create(): string {
    return 'This adds a new cat';
  }

  @Get()
  getCats(@Req() request: Request): string {
    return 'This action returns Cats';
  }

  @Get('ab*d')
  getWild() {
    return 'This Routes to use a wildcard';
  }
}
