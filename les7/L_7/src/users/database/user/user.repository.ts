import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongodb';

import { User, UserDocument } from './user.schema';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name)
    protected readonly userModel: Model<UserDocument>,
  ) {}

  findAll(filter: object) {
    return this.userModel.find(filter);
  }
}
