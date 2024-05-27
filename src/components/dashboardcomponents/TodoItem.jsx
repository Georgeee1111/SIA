import React from "react";

const TodoItem = ({ task, onRemove }) => {
  const handleRemove = () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    const updatedTasks = storedTasks.filter(
      (storedTask) => storedTask !== task
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    onRemove();
  };

  return (
    <li className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded hover:bg-gray-200 transition-all duration-200">
      <span>{task}</span>
      <button
        onClick={handleRemove}
        className="p-1 bg-red-500 text-white rounded hover:bg-red-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
      >
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
