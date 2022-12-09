import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ versionKey: false, collection: 'users' })
export class User {
  @Prop()
  id: string;
  readonly type: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.loadClass(User);
