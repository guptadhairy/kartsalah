import React from "react";
import cover from "../assets/inter1.png";


const Interview = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full p-6 relative">
      {/* Blue Background for Right Section */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-100 -z-10"></div>

      {/* Left Section */}
      <div className="flex-1 p-6">
        <div className="sm:text-5xl text-3xl font-semibold text-blue-600 mb-4 flex flex-col font-mono">
          <span className="text-black">Interview</span>
          <span className="text-[70px]"> Questions</span>
        </div>
        <p className="text-lg text-gray-600 mb-6">
        Generate personalized interview questions with AI, tailored specifically to your job application
        </p>
        <div className="relative">
          <img src={cover} alt="Person writing" className="w-full h-auto" />
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-3xl flex-1 mt-[140px] ">
        <div className="flex justify-center items-center">
          <div className=" bg-white w-[550px] p-6 rounded-3xl h-[600px] mt-[-120px]">
            <h2 className="text-2xl text-blue-600 mb-4 ">
              <span className="text-black mr-2">Enter Your</span> Details
            </h2>
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-purple-100 border-2 border-dashed border-purple-400 p-4 rounded-lg" />
              <div className="relative p-6 h-40 flex items-center justify-center">
                <input
                  type="file"
                  accept=".pdf,.docx"
                  className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                />
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 mx-auto text-purple-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1h-4.293l-1.147 1.146a.5.5 0 01-.707 0L10 16H4a1 1 0 01-1-1V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-700 mt-2">
                    Drag & Drop to Upload Resume or{" "}
                    <span className="text-purple-400 cursor-pointer">
                      Browse
                    </span>
                  </p>
                  <p className="text-gray-500 text-sm">
                    Supported Resume Formats: PDF, DOCX
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Interview Type</label>
              <div className="flex w-full gap-4">
                <div className="w-full bg-purple-300 flex justify-center items-center h-9 rounded-lg">Behavioural</div>
                <div className="w-full bg-purple-300 flex justify-center items-center h-9 rounded-lg">Technical</div>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">
                Job Description & Company
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter the Job Description & Targeting Company"
              />
            </div>
            <button
              className="w-full bg-gradient-to-br from-[#868CFF] to-[#4318FF] text-white p-2 rounded"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;
