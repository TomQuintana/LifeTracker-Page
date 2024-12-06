import axios from "axios";

export const getBooks = async (token:string) => {
  try {
    /* const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF91c2VyIjoidG9tcXVpbnRhbmEyMEBnbWFpbC5jb20iLCJ1c2VyX2lkIjoiMjlkZWRlMDQtMjNjNi00NWViLWI2NjYtMmRhZGExNWQ5ZGQwIiwiZXhwIjoxNzMxOTk0ODk4fQ.OXOf50dITazVGjnHGvYImfwqUzeWN0YbCfiL6_GG-9o' */
    const response = await axios.get(`http://localhost:3001/api/books`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  }
  catch (error: any) {
    console.log(error);

  }
}

export const searchBooks = async (title: string) => {
  try {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF91c2VyIjoidG9tcXVpbnRhbmEyMEBnbWFpbC5jb20iLCJ1c2VyX2lkIjoiMjlkZWRlMDQtMjNjNi00NWViLWI2NjYtMmRhZGExNWQ5ZGQwIiwiZXhwIjoxNzMxNzMxNzE3fQ.s-nzFwaZw1b7vQKtjc1mRveLH5H6UBlJriF0KGKIV_A'
    const response = await axios.get(`http://localhost:3001/api/books/search`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      params: {
        title: title
      }
    });
    return response.data;
  }
  catch (error: any) {
    console.log(error);

  }
}
