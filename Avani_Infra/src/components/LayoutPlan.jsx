import img1 from '../assets/layout_gallery/img1.jpg'
import img2 from '../assets/layout_gallery/img2.jpg'

const LayoutPlan = () => {
  return (
<section id="layout" className="w-full bg-white py-10">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-6 text-gray-800">Layout Plan</h2>
    
    {/* Layout Images */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <img src={img1} alt="Layout Image 1" className="rounded-lg shadow-md" />
      <img src={img2} alt="Layout Image 2" className="rounded-lg shadow-md" />
    </div>
    
    {/* Download Brochure */}
    <div className="text-center">
      <a
        href="/Avani projects brochure.pdf"
        download
        className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        Download Brochure (PDF)
      </a>
    </div>
  </div>
</section>

  );
};

export default LayoutPlan;
