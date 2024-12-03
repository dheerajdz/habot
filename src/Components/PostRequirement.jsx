import React from "react";

const PostRequirement = () => {
  return (
    <div className="bg-[#062D52] text-white p-10 flex justify-between items-center font-poppins">
      {/* Left Section */}
      <div className="flex-1 text-center">
        <div className="relative inline-block">
          <img
            src="yt.png"
            alt="Post Your Requirements"
            className="w-full max-w-md rounded-lg"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-3.197-1.999A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2A1 1 0 0015 12a1 1 0 00-.248-.832zM21 12c0-4.971-4.029-9-9-9S3 7.029 3 12s4.029 9 9 9 9-4.029 9-9z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1">
        <div className="text-left">
          {/* Buyer and Supplier Sections */}
          <div className="flex items-start mb-4">
            {" "}
            {/* Reduced margin bottom */}
            <div className="flex flex-col">
              {/* Buyer Heading with Custom Underline */}
              <div className="flex space-x-56">
                <h2 className="text-xl font-bold relative mb-4">
                  Buyer
                  <div className="absolute left-0 bottom-[-6px] w-12 h-1 bg-orange-500"></div>
                </h2>
                <h2 className="text-xl font-bold">Supplier</h2>
              </div>
              {/* <h2 className="text-xl font-bold relative mb-4">
                Buyer
                <div className="absolute left-0 bottom-[-6px] w-12 h-1 bg-orange-500"></div>
              </h2>
              <h2 className="text-xl font-bold">Supplier</h2> */}
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> Post your
                  requirements.
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> Sit back for
                  multiple suppliers to contact you.
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> Choose among
                  the suppliers based on the ratings and reviews.
                </li>
              </ul>
            </div>
            {/* Supplier Heading */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostRequirement;
