"use client";
import React from "react";

interface User {
  id: number;
  name: string;
  profileImage: string;
  budget: number;
}

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const handleEditBudget = (id: number) => {
    console.log("Edit budget", id);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">
        User Budget Summary
      </h1>
      <div className="overflow-x-auto shadow-lg sm:rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                Profile
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Total Budget (ARS)
              </th>
              <th scope="col" className="px-6 py-3">
                Modify Budget
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="bg-white border-b hover:bg-gray-100">
                <td className="px-6 py-4">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.profileImage}
                    alt={`${user.name} profile`}
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">
                  {user.name}
                </td>
                <td className="px-6 py-4">
                  {user.budget.toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS",
                  })}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEditBudget(user.id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Modify
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
