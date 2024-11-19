import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFilterSelect: (field: string) => void;
}

const FilterModal: React.FC<ModalProps> = ({ isOpen, onClose, onFilterSelect }) => {
  if (!isOpen) return null;

  const handleFilterSelect = (field: string) => {
    onFilterSelect(field); // Pass the selected filter field back to the parent
    onClose(); // Close the modal after selecting the filter
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-80">
        <h3 className="text-xl font-semibold mb-4">Select Filter Field</h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => handleFilterSelect('author')}
              className="w-full text-left p-2 hover:bg-gray-200 rounded"
            >
              Author
            </button>
          </li>
          <li>
            <button
              onClick={() => handleFilterSelect('type')}
              className="w-full text-left p-2 hover:bg-gray-200 rounded"
            >
              Type
            </button>
          </li>
          <li>
            <button
              onClick={() => handleFilterSelect('status')}
              className="w-full text-left p-2 hover:bg-gray-200 rounded"
            >
              Status
            </button>
          </li>
          <li>
            <button
              onClick={() => handleFilterSelect('title')}
              className="w-full text-left p-2 hover:bg-gray-200 rounded"
            >
              Title
            </button>
          </li>
        </ul>
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
