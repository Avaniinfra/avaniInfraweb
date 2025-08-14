import { useState, useEffect, useRef } from "react";

import img1 from '../assets/image_gallery/img1.jpg';
import img2 from '../assets/image_gallery/img2.jpg';
import img3 from '../assets/image_gallery/img3.jpg';
import img4 from '../assets/image_gallery/img4.jpg';
import img5 from '../assets/image_gallery/img5.jpg';

const images = [ img1, img2, img3, img4, img5];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 2500; // 2.5 seconds

  // Clear and reset the timeout for auto sliding
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    // Cleanup on unmount or before next effect
    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const prevImage = () => {
    resetTimeout();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    resetTimeout();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
<section
  id="home"
  className="w-full min-h-[500px] md:min-h-screen bg-center bg-no-repeat flex flex-col justify-center items-center text-white text-center relative"
  style={{
    backgroundImage: `url(${images[currentIndex]})`,
    backgroundSize: "cover", // best for full coverage
    backgroundPosition: "center center",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

  {/* Content wrapper with max width for readability */}
  <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center">
    <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-2xl tracking-wide animate-fadeIn">
      AVANI INFRA
    </h1>
    <p className="mt-4 text-lg md:text-2xl max-w-xl font-light animate-slideUp">
      Plots & Resort
    </p>
    <p className="mt-4 text-lg md:text-2xl max-w-xl font-light animate-slideUp">
      Kondagattu, Jagitial
    </p>
    <button
      onClick={() =>
        document
          .getElementById("register")
          .scrollIntoView({ behavior: "smooth" })
      }
      className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
    >
      Book Now
    </button>
  </div>

  {/* Navigation Buttons */}
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-6 z-20">
    <button
      onClick={prevImage}
      className="bg-black/50 hover:bg-black/80 text-white rounded-full p-3 shadow-lg"
      aria-label="Previous image"
    >
      &#x276E;
    </button>
    <button
      onClick={nextImage}
      className="bg-black/50 hover:bg-black/80 text-white rounded-full p-3 shadow-lg"
      aria-label="Next image"
    >
      &#x276F;
    </button>
  </div>
</section>

  );
};

export default HeroSection;
