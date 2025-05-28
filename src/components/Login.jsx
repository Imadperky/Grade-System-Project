import React, { useState } from "react";

const Login = ({ setUser }) => {
  const [role, setRole] = useState("student");
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (name.trim()) {
      setUser({ name, role });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-3xl font-extrabold text-center mb-6 text-indigo-700">
        Welcome Back
      </h2>

      <label className="block mb-2 font-semibold text-gray-700" htmlFor="name">
        Enter Your Name
      </label>
      <input
        id="name"
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-5"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="off"
      />

      <label className="block mb-2 font-semibold text-gray-700" htmlFor="role">
        Select Role
      </label>
      <select
        id="role"
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-7"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>

      <button
        onClick={handleLogin}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition duration-300"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
