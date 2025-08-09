import React from 'react'

const Highlights = () => {
   const features = [
    { title: 'Divine Location', icon: '🛕' },
    { title: 'RERA Approved', icon: '📜' },
    { title: 'Green Surroundings', icon: '🌳' },
    { title: 'High ROI', icon: '💹' }
  ];
  return (
    <section className="p-10 grid grid-cols-1 md:grid-cols-4 gap-6 text-center bg-green-50">
      {features.map((f, idx) => (
        <div key={idx} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="text-4xl mb-3">{f.icon}</div>
          <h3 className="text-lg font-semibold">{f.title}</h3>
        </div>
      ))}
    </section>
    
  );
}

export default Highlights
