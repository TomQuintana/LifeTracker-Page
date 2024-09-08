import axios from "axios";
import { getToken } from "./login";

export const getExpenses = async () => {
  try {
    console.log(getToken());
    
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF91c2VyIjoidG9tcXVpbnRhbmEyMEBnbWFpbC5jb20iLCJ1c2VyX2J1ZGdlIjo0MzIuMCwiZXhwIjoxNzI0NjM2MzQ1fQ.yCmwCbBa8usF7Ux0kUnlef96VMc5q3MU8nFfux3UbWM'
    const response = await axios.get(`http://localhost:3001/api/expense`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'month': 8
      },
    });
    return response.data;
  }
  catch (error: any) {
    console.log(error);

  }
}
