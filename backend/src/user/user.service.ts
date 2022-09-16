import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User, UserDocument } from './schemas/user.schema'; 

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    createdUser.save();
    return createdUser;
  }

  async findAll(): Promise<string | User[]> {
    return 'all users'
    // return this.userModel.find().exec();
  }

  async findOne(id: number): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }

  async remove(id: number): Promise<User> {
    return this.userModel.findByIdAndDelete(id);
  }
}
