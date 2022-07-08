import Server from '@helpers/server';

export const login = ({ code }: {code: string}) => Server('post', 'api/auth/login', { code });

export const logout = ({ jwt }: {jwt: string}) => Server('post', 'api/auth/logout', { jwt });

export const connectCustomBot = ({ botCode, userId }: {botCode: string, userId: string}) => Server('post', 'api/auth/bot', { botCode, userId });

export const botDisconnect = ({ userId, customBot }: {userId: string, customBot: string}) => Server('post', 'api/auth/disconnect', { userId, customBot });
