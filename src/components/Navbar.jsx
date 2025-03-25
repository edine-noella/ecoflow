import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">EcoFlow</Link>
        <div className="space-x-4">
          <Link to="/scan" className="text-white">Scan Waste</Link>
          <Link to="/stations" className="text-white">Stations</Link>
          <Link to="/rewards" className="text-white">Rewards</Link>
          <Link to="/profile" className="text-white">Profile</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
