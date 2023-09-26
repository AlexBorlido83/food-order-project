import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserInfoSchema } from './userInfo.model';
import { UserInfoService } from './userInfo.service';
import { UserInfoController } from './userInfo.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'UserInfo', schema: UserInfoSchema }]),
  ],
  controllers: [UserInfoController],
  providers: [UserInfoService],
})
export class UserInfoModule {}
