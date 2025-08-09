import React from 'react'
import img1 from '../assets/image_gallery/img1.jpg'
import img2 from '../assets/image_gallery/img2.jpg'
import img3 from '../assets/image_gallery/img3.jpg'
import img4 from '../assets/image_gallery/img4.jpg'
import img5 from '../assets/image_gallery/img5.jpg'
const ImageGallery = () => {
 const images = [img1,img2,img3,img4,img5];
  return (
    <section className="p-10" id='gallery'>
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <img
  key={idx}
  src={src}
  alt={`Gallery ${idx}`}
  className="w-full h-48 md:h-60 rounded-lg shadow-md object-cover"
/>

        ))}
      </div>
    </section>
  );
}

export default ImageGallery
