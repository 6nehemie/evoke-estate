import { IUserState } from '@/utils/types/evokeApi/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IUserState = {
  id: undefined,
  fullName: '',
  email: '',
  avatar: '',
  username: '',
  title: '',
  location: '',
  description: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const user = action.payload as IUserState;
      state.id = user.id!;
      state.fullName = user.fullName;
      state.email = user.email;
      state.username = user.username;
      state.avatar = user.avatar;
      state.title = user.title;
      state.location = user.location;
      state.description = user.description;
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload as string;
    },
    clearUser: (state) => {
      state = initialState;
    },
  },
});

export const { setUser, setAvatar, clearUser } = userSlice.actions;
export default userSlice.reducer;
