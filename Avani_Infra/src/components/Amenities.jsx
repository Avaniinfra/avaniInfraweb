import React from 'react'

const Amenities = () => {
   const amenities = [
  "Grand Entrance Arch",
  "Proposed Customised Houses",
  "Solar Fencing",
  "Well Planned Residential Villa Plots",
  "24x7 Security",
  "Gated Community",
  "Clear Title with Legal Opinion",
  "33 Feet BT Roads",
  "Underground Pipeline for Water",
  "Underground Drainage",
  "100% Vaastu",
  "Tree Avenue Plantation",
  "Electricity",
  "Overhead Water Tank",
  "Rainwater Harvesting",
  "Pollution Free Environment",
  "Bank Loans Available"
];
  return (
    <section className="p-10" id='amenities'>
      <h2 className="text-2xl font-bold mb-4">Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {amenities.map((a, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:bg-green-100 transition-colors duration-300 flex justify-center items-center text-center">{a}</div>
        ))}
      </div>
    </section>
  );
}

export default Amenities
