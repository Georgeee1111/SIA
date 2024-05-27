// TodoList.js
import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import emailjs from "emailjs-com";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    saveTasksToLocalStorage(newTasks);
    sendEmail(task);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    saveTasksToLocalStorage(newTasks);
  };

  const saveTasksToLocalStorage = (tasks) => {
    if (tasks.length === 0) {
      localStorage.removeItem("tasks");
    } else {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };

  const sendEmail = (task) => {
    const templateParams = {
      task,
    };

    emailjs
      .send(
        "service_h1593mp",
        "template_pa0zzq3",
        templateParams,
        "lk7NlNa9ZwV2YDZ1W"
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
        },
        (error) => {
          console.error("Failed to send email.", error);
        }
      );
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">To-Do List</h1>
      <AddTodo onAdd={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onRemove={() => removeTask(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
