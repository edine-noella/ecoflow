import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ScanWaste from "./pages/ScanWaste";
import DisposalStations from "./pages/DisposalStations";
import Rewards from "./pages/Rewards";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  return (
    <Router>
      <AppContent user={user} setUser={setUser} />
    </Router>
  );
}

function AppContent({ user, setUser }) {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="min-h-screen bg-gray-100">
      {!hideNavbar && <Navbar user={user} setUser={setUser} />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/" element={<Signup setUser={setUser} />} />
        <Route path="/scan" element={<ScanWaste />} />
        <Route path="/stations" element={<DisposalStations />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route
          path="/profile"
          element={user ? <Profile user={user} /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
