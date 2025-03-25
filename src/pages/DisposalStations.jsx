function DisposalStations() {
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold text-green-700">
        Find Disposal Stations
      </h1>
      <p className="mt-4 text-gray-600">Locate the nearest disposal Areas.</p>

      <div className="mt-6 flex justify-center">
        <iframe
          title="Kigali Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15957.787763166163!2d30.0605!3d-1.9501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1616944862237!5m2!1sen!2srw"
          width="90%"
          height="400"
          style={{ border: "0", borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default DisposalStations;
