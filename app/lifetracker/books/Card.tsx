import React, { useState } from "react";

const Card = ({ title, author, image, type, status, description, cover }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para manejar la visibilidad del modal

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-72 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-center">
        <img src={cover} alt={title} className="w-60 h-48 object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="mt-2 space-y-3">
          <p className="text-gray-600">
            <span className="bg-sky-200 text-black px-2 py-1 rounded-xl">Author:</span> {author}
          </p>
          <p className="text-gray-600">
            <span className="bg-green-200 text-black px-2 py-1 rounded-xl">Type:</span> {type}
          </p>
          <p className="text-gray-600">
            <span className="bg-yellow-200 text-black px-2 py-1 rounded-xl">Status:</span> {status}
          </p>
          {/* Botón para abrir el modal */}
          <button 
            onClick={openModal}
            className="mt-2 text-blue-500 hover:underline"
          >
            Show Description
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-4">{description}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

