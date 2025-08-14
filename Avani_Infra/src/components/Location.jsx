import connectivityImg from '../assets/connectivity.jpeg'; // replace with your image path

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
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3780.081523135158!2d78.93705256764962!3d18.660337367035176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM5JzM4LjIiTiA3OMKwNTYnMDguMyJF!5e0!3m2!1sen!2sin!4v1755156969697!5m2!1sen!2sin"
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
