import axios, { AxiosError } from 'axios';

const getPostById = async (id: string) => {
  try {
    const response = await axios.get(`${process.env.EVOKE_URL}/posts/${id}`);
    const data = response.data;

    return data;
  } catch (error: AxiosError | any) {
    const errorMsg = (error.response.data.message as any) || '';
    console.error(error);
    return { error: errorMsg };
  }
};

export default getPostById;
