


import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ScanWaste from "./pages/ScanWaste";
import DisposalStations from "./pages/DisposalStations";
import Rewards from "./pages/Rewards";
import Navbar from "./components/Navbar";

function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/signup" || location.pathname === "/login";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/scan" element={<ScanWaste />} />
        <Route path="/stations" element={<DisposalStations />} />
        <Route path="/rewards" element={<Rewards />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;

