import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#062D52] text-white py-6 font-poppins">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <img src="lgo2.png" alt="" className="h-10 w-40" />
            <p>© R Singhania</p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Terms Links */}
            <div>
              <h3 className="font-semibold mb-2">Terms</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Data Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Links */}
            <div>
              <h3 className="font-semibold mb-2">Related</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Find Buyer
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-4 mt-6 md:mt-0">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition border border-gray-400 rounded-full p-2"
            >
              <img src="twitter (7).png" alt=" " className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition border border-gray-400 rounded-full p-2"
            >
              <img src="linkedin (4).png" alt=" " className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition border border-gray-400 rounded-full p-2"
            >
              <img src="instagram (7).png" alt=" " className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition border border-gray-400 rounded-full p-2"
            >
              <img src="facebook-app-symbol.png" alt=" " className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
