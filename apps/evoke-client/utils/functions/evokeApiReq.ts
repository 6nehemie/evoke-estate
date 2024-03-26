import axios from 'axios';
import { cookies } from 'next/headers';

const accessToken = cookies().get('accessToken');

export const evokeReq = axios.create({
  baseURL: `${process.env.EVOKE_URL}`,
  headers: {
    Authorization: `Bearer ${accessToken?.value}`,
  },
});
