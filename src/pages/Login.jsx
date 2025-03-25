

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("loggedIn", "true");
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-3xl font-bold text-green-700 text-center">Login</h1>
        <p className="mt-4 text-gray-600 text-center">Enter your credentials to continue.</p>
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
          onClick={handleLogin}
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded"
        >
          Log In
        </button>
        <span className="block text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <a href="/" className="text-green-600">
            Sign Up
          </a>
        </span>
      </div>
    </div>
  );
}

export default Login;

