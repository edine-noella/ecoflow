import { useState } from "react";

function Rewards() {
  const [points, setPoints] = useState(0); // Fake points for display
  const [message, setMessage] = useState("");

  const handleClaimReward = () => {
    setMessage("🫣 ooops! You don't have enough points yet!");
    setTimeout(() => setMessage(""), 3000); // Message disappears after 3 seconds
  };

  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold text-green-700">Your Rewards</h1>
      <p className="mt-2 text-gray-600">Earn points for responsible waste disposal.</p>

      {/* Display User Points */}
      <div className="mt-6 text-xl font-semibold text-green-800">
        🌟 Your Points: <span className="text-yellow-500">{points}</span>
      </div>

      {/* Fake Reward Options */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <h3 className="text-lg font-semibold">♻️ Free Eco-Friendly Bag</h3>
          <p className="text-gray-500">Cost: 500 points</p>
          <button
            className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            onClick={handleClaimReward}
          >
            Claim Reward
          </button>
        </div>

        <div className="bg-white shadow-lg p-4 rounded-lg">
          <h3 className="text-lg font-semibold">🚲 10% Discount on E-Bike Rental</h3>
          <p className="text-gray-500">Cost: 1000 points</p>
          <button
            className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            onClick={handleClaimReward}
          >
            Claim Reward
          </button>
        </div>
      </div>

      {/* Claim Message */}
      {message && <p className="mt-4 text-green-700 font-semibold">{message}</p>}
    </div>
  );
}

export default Rewards;
