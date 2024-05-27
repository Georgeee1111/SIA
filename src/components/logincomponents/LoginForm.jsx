import React, { useState } from "react";
import InputFields from "../generalcomponents/InputFields";
import Box from "../generalcomponents/Box";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = "user";
    const password = "pass";

    if (username === username && password === password) {
      navigate("/dashboard");
    } else {
      setErrors({
        username: username ? "" : "Username is required",
        password: password ? "" : "Password is required",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Box>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <InputFields
            label="Username"
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
            errorMessage={errors.username}
          />
          <InputFields
            label="Password"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            errorMessage={errors.password}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
          >
            Login
          </button>
        </form>
      </Box>
    </div>
  );
};

export default LoginForm;
