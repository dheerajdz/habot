import React from "react";

const HabotSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center text-black p-8 md:p-16 font-poppins mr-9">
      {/* Left Section */}
      <div className="flex flex-col items-start space-y-10 max-w-md text-left md:mr-16 ml-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="text-black-500">Ready to Dive into</span>
          <span className="text-blue-950"> HABOT?</span>
        </h1>
        <p className="font-poppins text-black mb-6">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <button className="px-10 py-3 bg-[#00732F] text-white font-semibold rounded-sm hover:bg-green-600 flex items-center justify-start">
          Sign up Today!
          <img src="right-arrow.png" alt="arrow" className="h-5 w-5 ml-2" />
        </button>
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-2 gap-6 mt-8 md:mt-0 items-center md:ml-60">
        {[
          "Abu Dhabi",
          "Dubai",
          "Sharjah & Ajman",
          "Fujairah",
          "Ras Al Khaimah",
          "Umm Al Quwain",
        ].map((location, index) => (
          <button
            key={index}
            className="px-6 py-3 border-2 border-orange-500 text-black bg-white font-semibold rounded-md hover:bg-orange-100"
          >
            {location}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HabotSection;
