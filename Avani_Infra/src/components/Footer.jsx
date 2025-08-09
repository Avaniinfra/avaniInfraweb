import React from 'react'

const Footer = () => {
   return (
    <footer className="bg-gray-900 text-gray-300 p-6 text-center">
      <p>© {new Date().getFullYear()} AVANI INFRA. All rights reserved.</p>
      <p className="mt-2">Contact: <a href="tel:+919876543210" className="text-green-400 hover:underline">+91 9876543210</a> | <a href="mailto:info@avaniinfra.com" className="text-green-400 hover:underline">info@avaniinfra.com</a></p>
    </footer>
  );
}

export default Footer
