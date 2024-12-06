"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Link, SquareX } from "lucide-react";
import Button from "@mui/material/Button";
import { getExpenses, deleteExpense } from "@/services/expenses";
import Modal from "../ui/Modal";

interface Expense {
  name: string;
  price_ARS: number;
  price_USDT: number;
  type: string;
  coutes: number;
  month: string;
  date: string;
}

const ExpenseTable: React.FC = () => {
  const { data: session } = useSession();
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Nuevo estado para manejar el loading

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async (id: number) => {
    await deleteExpense(session?.user?.token, id);
    refreshExpenses();
  };

  const handleAddExpenseCallback = () => {
    refreshExpenses(); // Recargar la lista completa después de añadir un nuevo gasto
  };

  const refreshExpenses = async () => {
    setLoading(true); // Establecer loading en true mientras se recargan los datos
    const data = await getExpenses(session?.user?.token);
    setExpenses(data);
    setLoading(false); // Detener el loading después de que se carguen los datos
  };

  useEffect(() => {
    const fetchExpenses = async () => {
      const data = await getExpenses(session?.user?.token);
      console.log(data);
      
      setExpenses(data.data);
      setLoading(false); // Detener el loading después de que se carguen los datos
    };

    fetchExpenses();
  }, [session?.user?.token]);

  return (
    <div className="max-w-6xl mx-auto p-4 rounded-">
      <h1 className="text-3xl font-mono text-center mb-6">Expense List</h1>

      {loading ? (
        <div className="text-center">
          <p className="text-gray-600">Loading expenses...</p>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Price (ARS)</th>
                <th scope="col" className="px-6 py-3">Price (USDT)</th>
                <th scope="col" className="px-6 py-3">Type</th>
                <th scope="col" className="px-6 py-3">Coutes</th>
                <th scope="col" className="px-6 py-3">Date</th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr
                  key={index}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100`}
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {expense.name}
                  </td>
                  <td className="px-6 py-4">
                    {expense.price_ARS.toLocaleString("es-AR")}
                  </td>
                  <td className="px-6 py-4">{expense.price_USDT.toFixed(2)}</td>
                  <td className="px-6 py-4">{expense.type}</td>
                  <td className="px-6 py-4">{expense.coutes}</td>
                  <td className="px-6 py-4">{expense.date}</td>
                  <td>
                    <button onClick={() => handleDelete(expense.id)}>
                      <SquareX className="h-6 w-6 text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="flex justify-between">
        <div className="mt-4 text-center">
          <Button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Total Expenses by type
          </Button>
        </div>

        <div className="mt-4 text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={openModal}
          >
            Add New Expense
          </button>
        </div>
      </div>

      {isModalOpen && (
        <Modal 
          closeModal={closeModal}
          token={session?.user?.token}
          onAddExpense={handleAddExpenseCallback}
        />
      )}
    </div>
  );
};

export default ExpenseTable;

