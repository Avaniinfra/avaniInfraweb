import { useState } from "react";

const RegistrationForm = () => {
  const [selectedForm, setSelectedForm] = useState("Self");

  const formUrls = {
    Self: "https://docs.google.com/forms/d/e/1FAIpQLSdGzCvNHAnGjUlwdTwMf1hhT3u6GrKB0PuYG-mYX-hbEYUPvw/viewform?usp=header",
    Refer: "https://docs.google.com/forms/d/e/1FAIpQLSckhbCJmFFKKB_PTq_9jgwgS8L7U3qaIcVqDK6LbqTYzEPQ1A/viewform?usp=header", // Replace with your second form URL
  };

  return (
    <section id="register" className="w-full bg-white py-10">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Register</h2>

        {/* Styled radio buttons stacked vertically */}
        <div className="mb-6 flex flex-col space-y-4">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              name="registerType"
              value="Self"
              checked={selectedForm === "Self"}
              onChange={() => setSelectedForm("Self")}
              className="form-radio text-indigo-600 w-5 h-5"
            />
            <span className="ml-2 text-gray-700 font-medium">Self</span>
          </label>

          <label className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              name="registerType"
              value="Refer"
              checked={selectedForm === "Refer"}
              onChange={() => setSelectedForm("Refer")}
              className="form-radio text-indigo-600 w-5 h-5"
            />
            <span className="ml-2 text-gray-700 font-medium">
              Refer Family/Friends
            </span>
          </label>
        </div>

        <iframe
          src={formUrls[selectedForm]}
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title={`${selectedForm} Registration Form`}
          className="rounded-lg shadow-md"
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
};

export default RegistrationForm;
