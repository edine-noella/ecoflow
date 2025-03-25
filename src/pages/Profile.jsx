function Profile({ user }) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-green-700">Profile</h1>
        <p className="mt-4 text-gray-600">Welcome, <strong>{user.name}</strong></p>
        <p className="text-gray-600">Email: {user.email}</p>
      </div>
    );
  }
  
  export default Profile;
  