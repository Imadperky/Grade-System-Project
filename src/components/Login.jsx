import React, { useState } from "react";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const Login = ({ setUser }) => {
  const [role, setRole] = useState("student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email and password required");
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser({ name, role, email: userCredential.user.email });
      localStorage.setItem("userRole", role);
      localStorage.setItem("userName", name);
    } catch (err) {
      setError("Login failed: " + err.message);
    }
  };

  const handleSignup = async () => {
    if (!email || !password) {
      setError("Email and password required");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser({ name, role, email: userCredential.user.email });
      localStorage.setItem("userRole", role);
      localStorage.setItem("userName", name);
    } catch (err) {
      setError("Signup failed: " + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-3xl font-extrabold text-center mb-6 text-indigo-700">
        Welcome Back
      </h2>
      {error && <div className="mb-4 text-red-600">{error}</div>}
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
      <label className="block mb-2 font-semibold text-gray-700" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-5"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="off"
      />
      <label className="block mb-2 font-semibold text-gray-700" htmlFor="password">
        Password
      </label>
      <input
        id="password"
        type="password"
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-5"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition duration-300 mb-2"
      >
        Login
      </button>
      <button
        onClick={handleSignup}
        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-md transition duration-300"
      >
        Sign Up
      </button>
    </div>
  );
};

export default Login;