import React from 'react'

const LocationSection = () => {
 function LocationSection() {
    return (
    <section id="location" className="p-10 bg-gradient-to-b from-white to-green-50">
      <h2 className="text-2xl font-bold mb-4">Location & Nearby Attractions</h2>
      <iframe title="Google Maps" src="https://www.google.com/maps/embed?..." className="w-full h-96 border-0"></iframe>
      <ul className="mt-4 list-disc pl-6">
        <li>Nearby Temple</li>
        <li>Shopping Center</li>
        <li>National Highway</li>
      </ul>
    </section>
  );
}
}

export default LocationSection
