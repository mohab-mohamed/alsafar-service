import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { InsertResult } from 'typeorm';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('test')
  insertDummy(): Promise<InsertResult> {
    return this.userService.insertTestUser();
  }
}
