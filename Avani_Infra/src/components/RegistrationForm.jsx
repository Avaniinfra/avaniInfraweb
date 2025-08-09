import React from 'react'

const RegistrationForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    window.open(`https://wa.me/91${phone}?text=Hello%20${name},%20Thanks%20for%20registering!`, '_blank');
  };

  return (
  <section id="register" className="w-full bg-white py-10">
  <div className="max-w-xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-6">Register</h2>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSdGzCvNHAnGjUlwdTwMf1hhT3u6GrKB0PuYG-mYX-hbEYUPvw/viewform?usp=header"
      width="100%"
      height="600"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="Registration Form"
      className="rounded-lg shadow-md"
    >
      Loading…
    </iframe>
  </div>
</section>

  );
}

export default RegistrationForm
