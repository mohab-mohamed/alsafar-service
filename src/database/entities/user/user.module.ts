
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { userProviders } from './user.providers';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...userProviders,
    UserService,
  ],
  controllers: [
    UserController
  ]
})
export class UserModule {}