import { Body, Controller, Post } from '@nestjs/common';
import { UserInfoService } from './userInfo.service';

@Controller('userInfo')
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {}

  @Post()
  async addUserInfos(
    @Body('name') userName: string,
    @Body('street') userInfoStreet: string,
    @Body('postalCode') userInfoPostalCode: string,
    @Body('city') userInfoCity: string,
  ) {
    const generatedId = await this.userInfoService.addUserInfo(
      userName,
      userInfoStreet,
      userInfoPostalCode,
      userInfoCity,
    );

    return { id: generatedId };
  }
}
