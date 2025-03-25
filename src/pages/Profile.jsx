
  

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (storedUser && isLoggedIn) {
      setUser(storedUser);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold text-green-700">Profile</h1>
      {user ? (
        <p className="mt-4 text-gray-600">Welcome, {user.email}!</p>
      ) : (
        <p className="mt-4 text-gray-600">Loading...</p>
      )}
    </div>
  );
}

export default Profile;
