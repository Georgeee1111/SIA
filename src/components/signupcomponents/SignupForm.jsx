import React, { useState } from "react";
import axios from "axios";
import Box from "../generalcomponents/Box";
import InputFields from "../generalcomponents/InputFields";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (username.trim() === "") {
      validationErrors.username = "Username is required";
    }
    if (password.trim() === "") {
      validationErrors.password = "Password is required";
    }
    if (confirmPassword.trim() === "") {
      validationErrors.confirmPassword = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/register",
          {
            email: username,
            username,
            password,
            password_confirmation: confirmPassword,
          }
        );
        console.log("Form submitted", response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Box>
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <InputFields
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            errorMessage={errors.email}
          />
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
          <InputFields
            label="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            errorMessage={errors.confirmPassword}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </Box>
    </div>
  );
};

export default SignupForm;
