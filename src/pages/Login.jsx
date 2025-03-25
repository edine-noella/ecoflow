import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = { name: "Edine", email: "edinenoella@gmail.com"  };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-green-700">Login</h2>
        <form onSubmit={handleLogin} className="mt-4">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded mb-2" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border rounded mb-2" required />
          <button className="w-full bg-green-600 text-white py-2 rounded">Login</button>
          <span className="block text-center mt-4 text-gray-600">Don't have an account? <a href="/signup" className="text-green-600">Sign Up</a></span>
        </form>        
      </div>
    </div>
  );
}

export default Login;
