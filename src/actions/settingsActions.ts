import Server from '@helpers/server';
import checkAuth from '@helpers/checkAuth';

export const getSettings = () => Server('get', 'api/settings/get').catch(checkAuth);

export const updateSettings = ({ botOn, sendSelf }: TSettingsUpdate) => Server('post', 'api/settings/update', { botOn, sendSelf }).catch(checkAuth);

export type TSettings = {
    _id: string;
    userId: string;
    botOn: boolean;
    sendSelf: boolean;
}

export type TSettingsUpdate = {
    botOn: boolean;
    sendSelf: boolean;
}
