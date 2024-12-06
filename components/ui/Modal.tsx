import { addExpenses } from "@/services/expenses";
import React, { useState } from "react";

const Modal = ({ closeModal, token, onAddExpense }) => {
  const [formData, setFormData] = useState({
    name: "",
    price_ARS: "",
    products: [{}],
    type: "others",
    coutes: "",
    month: new Date().getMonth() + 1,
    date: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log("Datos del formulario:", formData);
    const response = await addExpenses(token, formData);
    if (response) {
      onAddExpense(formData); // Notificar al componente padre
      closeModal(); // Cerrar el modal
    }
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-80">
        <h2 className="text-xl font-semibold mb-4">Formulario</h2>
        <form className="space-y-4 font-mono">
          <div className="">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium ">Price (ARS)</label>
            <input
              type="number"
              name="price_ARS"
              value={formData.price_ARS}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="others">Others</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Coutes</label>
            <input
              type="text"
              name="coutes"
              value={formData.coutes}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Month</label>
            <input
              type="number"
              name="month"
              value={formData.month}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-2 focus:ring-blue-500 focus:border-blue-500"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex justify-around space-x-4">
            <button
              type="button"
              onClick={closeModal}
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              Close
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-green-500 text-white py-2 px-4 rounded"
            >
              Send Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
