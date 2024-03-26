'use server';

import removeAuthCookie from '../auth/removeAuthCookie';
import { evokeReq } from '../functions/evokeApiReq';
import { AxiosError } from 'axios';

const deleteUserAction = async () => {
  try {
    const response = await evokeReq.delete('/users/me');
    // console.log(response.data);
    removeAuthCookie();
  } catch (error: AxiosError | any) {
    console.log(error.response.data);
  }
};

export default deleteUserAction;
