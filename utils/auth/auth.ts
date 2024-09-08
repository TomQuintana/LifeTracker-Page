import { cookies } from 'next/headers'
import axios from "axios";

export const auth = async (data: any) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, data);
    console.log(response.data);


    if (response.status === 200) {
      localStorage.setItem('token', response.data.token);
      cookies().set('token', response.data.token);
    }


    return response.data;
  }
  catch (error: any) {

  }
}
