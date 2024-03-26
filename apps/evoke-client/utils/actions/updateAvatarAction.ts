'use server';

import { AxiosError } from 'axios';
import { evokeReq } from '../functions/evokeApiReq';

const updateAvatarAction = async (formData: FormData) => {
  try {
    const response = await evokeReq.put('/users/me/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.avatarUrl;
  } catch (error: AxiosError | any) {
    console.error('Error updating avatar: ', error);
  }
};

export default updateAvatarAction;
