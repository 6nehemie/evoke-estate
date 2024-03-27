import axios, { AxiosError } from 'axios';

const getPostByUsername = async (username: string) => {
  try {
    const response = await axios.get(
      `${process.env.EVOKE_URL}/posts/user/${username}`
    );
    return response.data;
  } catch (error: AxiosError | any) {
    console.error(error);
    return [];
  }
};

export default getPostByUsername;
