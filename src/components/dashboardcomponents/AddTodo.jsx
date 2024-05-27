import React, { useState, useEffect } from "react";

const AddTodo = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      onAdd(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        placeholder="Add a new task"
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTodo;
