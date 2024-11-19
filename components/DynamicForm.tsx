import React from "react";

/**
 * DynamicForm Component
 * @param {Object} props
 * @param {Array} props.headers - Array of form field headers (e.g., [{ label: "Name", name: "name", type: "text" }]).
 * @param {Object} props.data - Initial values for the form fields (e.g., { name: "", email: "" }).
 * @param {Object} props.handlers - Handlers for form actions (e.g., { onSubmit, onChange }).
 */
const DynamicForm = ({ headers = [], data = {}, handlers = {} }) => {
  const { onSubmit = () => {}, onChange = () => {} } = handlers;

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md">
      {headers.map((field, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={field.name} className="block font-medium mb-1">
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type || "text"}
            value={data[field.name] || ""}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;

/**
 * Example usage of DynamicForm
 */
const ParentComponent = () => {
  const headers = [
    { label: "Name", name: "name", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
  ];

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dynamic Form Example</h1>
      <DynamicForm
        headers={headers}
        data={formData}
        handlers={{ onChange: handleChange, onSubmit: handleSubmit }}
      />
    </div>
  );
};

export default ParentComponent;
