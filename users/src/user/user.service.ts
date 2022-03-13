import { Inject, Injectable } from '@nestjs/common';
import { User } from './user';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @Inject(User) private readonly userRepository: Repository<User>,
  ) {}

  async save(options) {
    return this.userRepository.save(options);
  }
}
