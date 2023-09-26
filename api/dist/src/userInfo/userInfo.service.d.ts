import { UserInfo } from './userInfo.model';
import { Model } from 'mongoose';
export declare class UserInfoService {
    private readonly userInfoModel;
    constructor(userInfoModel: Model<UserInfo>);
    addUserInfo(name: string, street: string, postalCode: string, city: string): Promise<string>;
}
