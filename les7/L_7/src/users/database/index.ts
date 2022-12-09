import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema, UserRepository } from './user';

export const database = [
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
];

export const repositories = [UserRepository];
