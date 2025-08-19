import React from 'react'

const Footer = () => {
   return (
    <footer className="bg-gray-900 text-gray-300 p-6 text-center">
      <p>© {new Date().getFullYear()} AVANI INFRA. All rights reserved.</p>
      <p className="mt-2">Contact: <a href="tel:+919701719944" className="text-green-400 hover:underline" id='Contact Us'>+91 9701719944</a> | <a href="mailto:avaniinfracare@gmail.com" className="text-green-400 hover:underline">avaniinfracare@gmail.com</a></p>
    </footer>
  );
}

export default Footer
