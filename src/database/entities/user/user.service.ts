
import { Injectable, Inject } from '@nestjs/common';
import { Repository, InsertResult } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async insertTestUser(): Promise<InsertResult> {
      const testUser: User = {id: 1, first_name: "mohab", last_name: "mohamed", email: "email.com", password:"123"};
      return this.userRepository.insert(testUser);
  }
}