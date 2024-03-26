'use server';

import { evokeReq } from '../functions/evokeApiReq';
import { AxiosError } from 'axios';

const updateUserEmailAction = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  console.log(data);
  const requestData = {
    email: data.newEmail,
    confirmEmail: data.confirmEmail,
  };

  try {
    const response = await evokeReq.put('/users/me/updateEmail', requestData);
    // console.log(response.data);
  } catch (error: AxiosError | any) {
    console.log(error);
    const errorMsg = error.response.data.message;
    return { error: errorMsg };
  }
};

export default updateUserEmailAction;
