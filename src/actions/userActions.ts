import Server from '@helpers/server';
import checkAuth from '@helpers/checkAuth';

export const getSelf = () => Server('get', 'api/users/me').catch(checkAuth);

export const getUsersCount = () => Server('get', 'api/auth/count');

export type TUser = {
    userId: string;
    userName: string;
    nickName: string;
    email: string;
    profilePic: string;
    info: string;
    channelId: string;
    role: string;
    botOn: boolean;
    sendSelf: boolean;
}
