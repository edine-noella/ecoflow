import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const user = { name, email };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    navigate("/profile");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-green-700">Sign Up</h2>
        <form onSubmit={handleSignup} className="mt-4">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full p-2 border rounded mb-2" required />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded mb-2" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border rounded mb-2" required />
          <button className="w-full bg-green-600 text-white py-2 rounded">Sign Up</button>
          <span className="block text-center mt-4 text-gray-600">Already have an account? <a href="/login" className="text-green-600">Login</a></span>
        </form>
      </div>
    </div>
  );
}

export default Signup;
