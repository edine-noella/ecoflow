

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (email && password) {
      localStorage.setItem("user", JSON.stringify({ email }));
      localStorage.setItem("loggedIn", "true");
      navigate("/home");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-3xl font-bold text-green-700 text-center">
          Signup
        </h1>
        <p className="mt-4 text-gray-600">Create an account to get started.</p>
        <input
          type="email"
          placeholder="Enter email"
          className="block mx-auto mt-4 px-4 py-2 border rounded w-80"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          className="block mx-auto mt-2 px-4 py-2 border rounded w-80"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleSignup}
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded"
        >
          Sign Up
        </button>
        <span className="block text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-green-600">
            Login
          </a>
        </span>
      </div>
    </div>
  );
}

export default Signup;
