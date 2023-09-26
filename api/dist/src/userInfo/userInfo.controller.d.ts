import { UserInfoService } from './userInfo.service';
export declare class UserInfoController {
    private readonly userInfoService;
    constructor(userInfoService: UserInfoService);
    addUserInfos(userName: string, userInfoStreet: string, userInfoPostalCode: string, userInfoCity: string): Promise<{
        id: string;
    }>;
}
