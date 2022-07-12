import Server from '@helpers/server';
import checkAuth from '@helpers/checkAuth';

export const getSelf = () => Server('get', 'api/users/me').catch(checkAuth);

export const getUsersCount = () => Server('get', 'api/auth/count');

export const updateUser = ({ userId, settings }: {userId: string, settings: TSettings}) => Server('post', 'api/users/update', { userId, settings });

export type TUser = {
    settings: TSettings;
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

type TSettings = {
    botOn: boolean;
    sendSelf: boolean;
    triggers: any[]
}
