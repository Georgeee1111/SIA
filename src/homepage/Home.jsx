import React from "react";
import "../tailwind/App.css";
import TodoList from "../components/dashboardcomponents/TodoList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <TodoList />
    </div>
  );
};

export default App;
