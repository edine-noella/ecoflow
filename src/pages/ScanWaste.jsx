import { useState } from "react";

function ScanWaste() {
  const [message, setMessage] = useState("");

  const handleUpload = () => {
    const random = Math.random();
    if (random > 0.5) {
      setMessage("This is classified as Plastic Waste.");
    } else {
      setMessage("Waste cannot be classified, try again.");
    }
  };

  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold text-green-700">Scan Waste</h1>
      <button onClick={handleUpload} className="mt-4 px-6 py-2 bg-green-600 text-white rounded">Upload Image</button>
      {message && <p className="mt-4 text-gray-700">{message}</p>}
    </div>
  );
}

export default ScanWaste;
