import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from "mongoose";

export type UserDocument = User & Document

@Schema()
export class User {
  @Prop({ required: true })
  id: number

  @Prop({ required: true })
  fullName: string

  @Prop({ required: true })
  nickName: string

  @Prop()
  email: string
  
}

export const UserSchema = SchemaFactory.createForClass(User)