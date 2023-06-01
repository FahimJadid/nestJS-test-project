import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';
import { CatsController } from './cats.controller';

@Module({
  controllers: [UsersController, AlbumsController, CatsController],
})
export class AppModule {}
