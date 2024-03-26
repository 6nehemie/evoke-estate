// client action
import { useAppDispatch } from '@/lib/hooks';
import axios from 'axios';

const signIn = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try {
    const response = await axios.post('/api/auth/login', {
      username,
      password,
    });
    const user = response.data.user;

    return user;
  } catch (error) {
    console.error(error);
    return { error: 'incorrect E-mail,Username or password.' };
  }
};

export default signIn;
