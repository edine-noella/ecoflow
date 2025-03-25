

import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <nav className="bg-green-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">EcoFlow</Link>
        <div className="space-x-4">
          <Link to="/home" className="text-white">Home</Link>
          <Link to="/scan" className="text-white">Scan Waste</Link>
          <Link to="/stations" className="text-white">Disposal Stations</Link>
          <Link to="/rewards" className="text-white">Rewards</Link>
          {user ? (
            <>
              <Link to="/profile" className="text-white pl-20">{user.email}</Link>
              <button onClick={handleLogout} className="text-white">Logout</button>
            </>
          ) : (
            <Link to="/login" className="text-white">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

