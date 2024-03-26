'use server';

import { AxiosError } from 'axios';
import { evokeReq } from '../functions/evokeApiReq';

const removeAvatarAction = async () => {
  try {
    const response = await evokeReq.delete('users/me/avatar');

    console.log('Avatar Removed: ', response.data);
  } catch (error: AxiosError | any) {
    console.error('Error updating avatar: ', error.response.data);
  }
};

export default removeAvatarAction;
