import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import axios from 'axios';
import { errorMonitor } from 'events';

interface IErrorResponse {
  data: {
    path: string;
    error: string;
    message: string;
    timestamp: string;
    status: number;
  };
}

export async function POST(request: Request, response: Response) {
  const credentials = await request.json();
  const apiUrl = process.env.EVOKE_URL;

  try {
    const response = await axios.post(`${apiUrl}/auth/login`, credentials);
    const user = response.data;

    cookies().set('accessToken', user.token);

    return NextResponse.json({ user }, { status: 200 });
    // return response;
  } catch (error: any) {
    const errorData = (await error.response.data) as IErrorResponse;
    console.error(errorData);
    return NextResponse.json({ error: errorData }, { status: 400 });
  }
}
