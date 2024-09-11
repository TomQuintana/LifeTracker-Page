import React from "react";

const Card = ({ title, author, image, type, status }) => {
  return (
    <div className="w-64 bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">Author: {author}</p>
          <p className="text-gray-600">Type: <span>{type}</span></p>
          <p className="text-gray-600">Status: {status}</p>
      </div>
    </div>
  );
};

export default Card;
