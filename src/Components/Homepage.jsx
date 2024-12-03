// import React from "react";
// import backgroundImage from "../assets/Background.png";

// const HomePage = () => {
//   return (
//     <div
//       className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-center text-white font-poppins w-full"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//       }}
//     >
//       {/* Header Section */}
//       <div className="max-w-2xl px-4">
//         <h1 className="text-3xl md:text-5xl font-bold mb-4">
//           Are You a Supplier?
//         </h1>
//         <p className="text-lg md:text-xl font-medium mb-8">
//           Explore Matching Opportunities.
//         </p>
//       </div>

//       {/* Search Section */}
//       <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-lg max-w-4xl w-full">
//         {/* Search Input 1 */}
//         <input
//           type="text"
//           placeholder="Search your required service here"
//           className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         {/* Search Input 2 */}
//         <input
//           type="text"
//           placeholder="Search your desired location here"
//           className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         {/* Search Button */}
//         <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600">
//           Search
//         </button>
//       </div>

//       {/* Footer Section */}
//       <p className="mt-6 text-sm">
//         <span className="text-gray-300">Are you a buyer?</span>{" "}
//         <a href="#post-requirements" className="text-blue-400 hover:underline">
//           Click here if you are looking to post a requirement
//         </a>
//       </p>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import backgroundImage from "../assets/Background.png";

const HomePage = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-center text-white font-poppins w-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Header Section */}
      <div className="px-4 text-center">
        <h1 className="text-5xl md:text-5xl font-bold mb-4">
          Are You a Supplier?
        </h1>
        <p className="text-lg md:text-6xl mb-7 whitespace-nowrap text-ellipsis font-poppins-light">
          Explore Matching Opportunities.
        </p>
      </div>

      {/* Search Section */}
      <div className="flex items-center space-x-4 p-4 rounded-lg shadow-lg max-w-4xl w-full">
        {/* Search Input 1 */}
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md border border-gray-300 w-full sm:w-2/3">
          <img
            src="placeholder 1.png"
            alt="Search Icon"
            className="text-orange-500 material-icons font-poppins-light"
          />
          <input
            type="text"
            placeholder="Search your required service here"
            className="flex-1 ml-2 bg-transparent outline-none text-gray-700"
          />
        </div>
        {/* Search Input 2 */}
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md border border-gray-300 w-full sm:w-2/3">
          <img
            src="suitcase 1.png"
            alt="Location Icon"
            className="text-orange-500 material-icons font-poppins-light"
          />
          <input
            type="text"
            placeholder="Search your desired location here"
            className="flex-1 ml-2 bg-transparent outline-none text-gray-700"
          />
        </div>
        {/* Search Button */}
        <button className="px-6 py-2 bg-[#00732F] text-white font-semibold rounded-md hover:bg-green-600 sm:w-1/4 font-inter">
          Search
        </button>
      </div>

      {/* Footer Section */}
      <p className="mt-6 text-sm">
        <span className="text-gray-300">Are you a buyer?</span>{" "}
        <a href="#post-requirements" className="text-blue-400 hover:underline">
          Click here if you are looking to post a requirement
        </a>
      </p>
    </div>
  );
};

export default HomePage;
