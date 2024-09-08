import axios from "axios";

export const getToken = async () => {
  try {
    const email = 'Tomquintana20@gmail.com'
    const password = 'TomMilo'

    const body = {
      email: email,
      password: password,
    }

    const response = await axios.post(`http://localhost:3001/api/auth/login`, {
      body
    });

    return response.data;
  }
  catch (error: any) {
    console.log(error);

  }
}
