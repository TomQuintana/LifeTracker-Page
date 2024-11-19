import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF91c2VyIjoidG9tcXVpbnRhbmEyMEBnbWFpbC5jb20iLCJ1c2VyX2lkIjoiMjlkZWRlMDQtMjNjNi00NWViLWI2NjYtMmRhZGExNWQ5ZGQwIiwiZXhwIjoxNzMxOTk1OTU0fQ.PGW2HXy3jb7I_c5hG4Vs9CVp7YTARWa2pUIkX-C9dqY'

export const getExpenses = async () => {
  try {
    
    const response = await axios.get(`http://localhost:3001/api/expense`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      params: {
        month: 11
      }
    });

    return response.data;
  }
  catch (error: any) {
    console.log(error);

  }
}

export const getExpensesByType = async () => {
  try {
    
    const response = await axios.get(`http://localhost:3001/api/expense/total`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      params: {
        month: 11
      }
    });

    console.log(response.data);
    
    return response.data;
  }
  catch (error: any) {
    console.log(error);

  }
}
