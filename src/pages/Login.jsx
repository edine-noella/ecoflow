import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-green-700">Login</h2>
        <form className="mt-4">
          <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-2" />
          <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-2" />
          <button className="w-full bg-green-600 text-white py-2 rounded">Login</button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account? <Link to="/signup" className="text-green-600">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
