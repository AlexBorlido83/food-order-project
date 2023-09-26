import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserInfo } from './userInfo.model';
import { Model } from 'mongoose';

@Injectable()
export class UserInfoService {
  constructor(
    @InjectModel('UserInfo') private readonly userInfoModel: Model<UserInfo>,
  ) {}

  async addUserInfo(
    name: string,
    street: string,
    postalCode: string,
    city: string,
  ) {
    const newUserInfo = new this.userInfoModel({
      name,
      street,
      postalCode,
      city,
    });
    const result = await newUserInfo.save();
    console.log(result);
    return result.id as string;
  }
}
