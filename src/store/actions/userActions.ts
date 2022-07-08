import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    userId: '',
    userName: '',
    nickName: '',
    email: '',
    profilePic: '',
    info: '',
    channelId: '',
    role: '',
    botOn: false,
    sendSelf: false,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => ({ ...state, user: action.payload }),
    logoutUser: (state) => ({
      ...state,
      user: {
        userId: '',
        userName: '',
        nickName: '',
        email: '',
        profilePic: '',
        info: '',
        channelId: '',
        role: '',
        botOn: false,
        sendSelf: false,
      },
    }),
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
