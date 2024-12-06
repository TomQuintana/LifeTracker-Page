import axios from "axios";

export const getExpenses = async (token: string) => {
  try {
    
    const response = await axios.get(`http://localhost:3001/api/expense`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      params: {
        month: 12,
        cursor: 0
      }
    });
    console.log(response.data);
    return response.data;
  }
  catch (error: any) {
    console.log(error);

  }
}

export const getExpensesByType = async (token: string) => {
  try {
    
    const response = await axios.get(`http://localhost:3001/api/expense/total`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      params: {
        month: 12
      }
    });
    console.log(response.data);
    

    return response.data;
  }
  catch (error: any) {
    console.log(error);

  }
}

export const addExpenses = async (token: string, expense: any) => {
  console.log(expense);
const expenseTest = {
  name: "Cena en Aleee",
  price_ARS: 13000,
  products: [
    {
      name: "test",
      price_ARS: 10000,
      quantity: 2,
    },
  ],
  type: "other",
  month: 10,
  date: "05-10-2024",
};
  
  try {
    const response = await axios.post(`http://localhost:3001/api/expense`, expenseTest, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    });
    console.log(response.data);
    
  } catch (error) {
    console.log(error.response.data);
    
  }
}

export const deleteExpense = async (token: string, id: string) => {
  try {
    const response = await axios.delete(`http://localhost:3001/api/expense/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.log(error.response.data);
  }
}
