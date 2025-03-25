import { Link, useNavigate } from "react-router-dom";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-green-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">EcoFlow</Link>
        <div className="space-x-4">
          <Link to="/scan" className="text-white">Scan Waste</Link>
          <Link to="/stations" className="text-white">Stations</Link>
          <Link to="/rewards" className="text-white">Rewards</Link>
          {user ? (
            <>
              <Link to="/profile" className="text-white pl-20">{user.name}</Link>
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
