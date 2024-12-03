import React from "react";

const SupplierVerification = () => {
  return (
    <div className="flex items-center bg-[#E8FBFF] p-10 rounded-lg mt-28 w-full h-36 font-poppins ">
      {/* Content Wrapper */}
      <div className="flex items-center space-x-32 w-full">
        {/* Heading Section */}
        <h2 className="text-2xl font-bold text-black mr-4 ml-96 text-center">
          Let Suppliers Find You
        </h2>
        {/* Button Section */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded">
          Get Verified
        </button>
      </div>
    </div>
  );
};

export default SupplierVerification;
