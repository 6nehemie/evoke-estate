import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import axios from 'axios';
import { errorMonitor } from 'events';

interface IErrorResponse {
  path: string;
  error: string;
  message: string;
  timestamp: string;
  status: number;
}

export async function POST(request: Request, response: Response) {
  const body = await request.json();
  const apiUrl = process.env.EVOKE_URL;

  const registerData = {
    firstName: body.firstName,
    lastName: body.lastName,
    username: body.username,
    email: body.email,
    password: body.password,
    passwordConfirmation: body.passwordConfirmation,
    termsAndConditions: body.termsAndConditions,
  };

  try {
    const response = await axios.post(`${apiUrl}/auth/register`, registerData);
    const user = response.data;

    cookies().set('accessToken', user.token);

    return NextResponse.json({ user }, { status: 200 });
  } catch (error: any) {
    const data = (await error.response?.data) as IErrorResponse;
    // console.error(data);
    return NextResponse.json({ error: data.message }, { status: 400 });
  }
}
