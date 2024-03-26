'use server';

import { evokeReq } from '../functions/evokeApiReq';
import { AxiosError } from 'axios';

const updateUserInfoAction = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const requestData = {
    username: data.username,
    fullName: data.fullName,
    location: data.country,
    title: data.title,
    description: data.description,
  };

  try {
    const response = await evokeReq.put('/users/me', requestData);
    // console.log(response.data);
  } catch (error: AxiosError | any) {
    console.log(error);
  }
};

export default updateUserInfoAction;
