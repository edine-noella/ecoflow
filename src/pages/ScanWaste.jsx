import { useState } from "react";

function ScanWaste() {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file)); // Display the uploaded image preview

      
      setTimeout(() => {
        // const random = Math.random();
        // if (random > 0.5) {
        //   setMessage("♻️ This is classified as Plastic Waste.");
        // } else {
          setMessage("⚠️ Waste cannot be classified, try again.");
        // }
      }, 2000); // Simulate "processing"
    }
  };

  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold text-green-700">Scan Waste</h1>
      <p className="mt-2 text-gray-600">Upload an image to identify your waste.</p>

      {/* Upload Input */}
      <label className="mt-6 inline-block bg-green-600 text-white px-6 py-2 rounded cursor-pointer hover:bg-green-700">
        Upload Image
        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
      </label>

      {/* Display Image Preview */}
      {image && (
        <div className="mt-6">
          <img src={image} alt="Uploaded Waste" className="mx-auto w-40 h-40 object-cover rounded-lg shadow-lg" />
        </div>
      )}

      {/* Classification Message */}
      {message && <p className="mt-4 text-gray-700 font-semibold">{message}</p>}
    </div>
  );
}

export default ScanWaste;
