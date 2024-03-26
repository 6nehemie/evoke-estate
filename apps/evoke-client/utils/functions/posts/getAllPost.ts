import axios, { AxiosError } from 'axios';

const getAllPost = async () => {
  try {
    const response = await axios.get(`${process.env.EVOKE_URL}/posts`);
    const data = response.data;

    return data;
  } catch (error: AxiosError | any) {
    const errorMsg = error.response?.data.message;
    console.error(error);
    return { error: errorMsg };
  }
};

export default getAllPost;
