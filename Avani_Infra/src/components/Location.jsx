import connectivityImg from '../assets/connectivity.jpg'; // replace with your image path

const Location = () => {
  return (
<section id="location" className="w-full bg-gray-100 py-10">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-6 text-gray-800">Location & Connectivity</h2>
    
    <div className="flex flex-col md:flex-row gap-6">
      {/* Connectivity Image */}
      <div className="flex-1 rounded-lg overflow-hidden shadow-lg h-80 md:h-auto">
        <img
          src={connectivityImg}
          alt="Connectivity Map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Google Map */}
      <div className="flex-1 rounded-lg overflow-hidden shadow-lg h-80 md:h-auto">
        <iframe
          title="Project Location"
          src="https://www.google.com/maps?q=18.6605,78.9361&hl=es;z=14&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>

  );
};

export default Location;
