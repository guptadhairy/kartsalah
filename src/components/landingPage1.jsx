import React, { useState } from "react";
import home from "../assets/landing.png";
import home2 from "../assets/landing2.png";
import home3 from "../assets/landing3.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-100">
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-purple-600">SalahKart</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-purple-600 hover:text-purple-800">
            Home
          </a>
          <a href="#" className="text-purple-600 hover:text-purple-800">
            Features
          </a>
          <a href="#" className="text-purple-600 hover:text-purple-800">
            Our Services
          </a>
          <a href="#" className="text-purple-600 hover:text-purple-800">
            Contact Us
          </a>
        </nav>
        <div className="hidden md:flex space-x-2">
          <button
            onClick={() => navigate("/login")}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg"
          >
            Log In
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
          >
            Sign Up
          </button>
        </div>
        <div className="md:hidden">
          <button className="text-purple-600" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-4">
          <a
            href="#"
            className="text-purple-600 text-xl hover:text-purple-800"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#"
            className="text-purple-600 text-xl hover:text-purple-800"
            onClick={toggleMenu}
          >
            Features
          </a>
          <a
            href="#"
            className="text-purple-600 text-xl hover:text-purple-800"
            onClick={toggleMenu}
          >
            Our Services
          </a>
          <a
            href="#"
            className="text-purple-600 text-xl hover:text-purple-800"
            onClick={toggleMenu}
          >
            Contact Us
          </a>
          <button
            onClick={() => {
              navigate("/login");
              toggleMenu();
            }}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg"
          >
            Log In
          </button>
          <button
            onClick={() => {
              navigate("/signup");
              toggleMenu();
            }}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
          >
            Sign Up
          </button>
        </div>
      )}
      <div className="flex flex-col md:flex-row mt-10 md:mt-[100px] justify-between items-center px-4 md:px-10">
        <main className="flex flex-col justify-start text-start py-10 md:py-20 md:px-10">
          <div className="flex flex-col justify-start items-start text-4xl sm:text-6xl gap-2 sm:gap-4">
            <h1 className="font-semibold text-indigo-600">SalahKart</h1>
            <h1>Finding Jobs</h1>
            <h1>
              Made <span className="text-indigo-600">Easy</span>
            </h1>
          </div>
          <p className="mt-3 sm:mt-5 text-sm sm:text-base">
            Discover a platform tailored for enhancing your job application
            process.
          </p>
          <p className="text-sm sm:text-base">
            Providing candidates with top-notch resume scoring and generation
            services.
          </p>
          <button className="bg-indigo-600 text-white w-[130px] sm:w-[170px] mt-4 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold">
            Know More
          </button>
        </main>
        <img
          src={home}
          alt="landing"
          className="w-full md:w-[640px] h-auto md:h-[677px] mt-4 md:mt-0"
        />
      </div>
      <section className="bg-indigo-600 py-6 sm:py-10">
        <div className="container mx-auto">
          <h2 className="text-center text-lg sm:text-xl mb-4 font-bold text-white">
            Our Resumes Got Selected By:
          </h2>
          <img src={home3} alt="landing3" className="w-full h-auto" />
        </div>
      </section>
      <section className="bg-indigo-100 py-10 sm:py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
            Our Key Features
          </h2>
        </div>
        <img src={home2} alt="landing2" className="w-full h-auto" />
      </section>
      <footer className="bg-indigo-900 text-white py-6">
        <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-indigo-400">
              Salahkart
            </h3>
            <p>
              Discover a platform tailored for enhancing your job application
              process.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-10">
            <div>
              <h4 className="font-bold mb-2">Product</h4>
              <ul className="space-y-1 ">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Log In/Sign Up
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Explore Blogs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Social</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Legal</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-4 container mx-auto mt-4">
          <div>© 2024 Salahkart. All rights reserved.</div>
          <div className="flex mt-4 md:mt-0 space-x-4">
            <a href="#" className="text-white hover:text-indigo-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.5a9.6 9.6 0 0 1-2.83.78A4.8 4.8 0 0 0 23.33 3c-.94.56-1.98.97-3.08 1.19A4.79 4.79 0 0 0 16.8 3c-2.65 0-4.8 2.15-4.8 4.8 0 .38.04.76.12 1.12C7.7 8.71 4.1 6.93 1.67 4.15a4.75 4.75 0 0 0-.65 2.42c0 1.67.85 3.14 2.13 4A4.78 4.78 0 0 1 .96 10v.05c0 2.34 1.66 4.28 3.87 4.72a4.85 4.85 0 0 1-2.16.08c.6 1.87 2.34 3.23 4.4 3.27A9.63 9.63 0 0 1 0 19.54a13.61 13.61 0 0 0 7.29 2.14c8.75 0 13.53-7.24 13.53-13.53 0-.21 0-.42-.02-.63A9.64 9.64 0 0 0 24 4.5z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-indigo-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46A1.77 1.77 0 0 0 1.77 24h11.02v-8.82h-2.96v-3.44h2.96V8.42c0-2.95 1.8-4.56 4.43-4.56 1.26 0 2.34.09 2.66.14v3.08h-1.83c-1.44 0-1.72.68-1.72 1.68v2.2h3.44l-.45 3.44h-2.99V24h5.86A1.77 1.77 0 0 0 24 22.23V1.77A1.77 1.77 0 0 0 22.23 0z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-indigo-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 5.5 4.46 9.96 9.96 9.96 5.5 0 9.96-4.46 9.96-9.96 0-5.5-4.46-9.96-9.96-9.96zm0 18.32c-4.6 0-8.36-3.76-8.36-8.36S7.4 3.64 12 3.64s8.36 3.76 8.36 8.36-3.76 8.36-8.36 8.36zm4.23-8.94l-1.42 1.42c-.3.3-.79.3-1.09 0L12 10.94 9.28 13.7c-.3.3-.79.3-1.09 0l-1.42-1.42c-.3-.3-.3-.79 0-1.09L9.58 8l-1.81-1.81c-.3-.3-.3-.79 0-1.09l1.42-1.42c.3-.3.79-.3 1.09 0L12 5.06l2.72-2.72c.3-.3.79-.3 1.09 0l1.42 1.42c.3.3.3.79 0 1.09L14.42 8l1.81 1.81c.31.3.31.79.01 1.09z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
