import React from "react";
import { FcViewDetails } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const ResumeVerification = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full mx-auto bg-white rounded-3xl shadow-lg p-4 sm:p-6  lg:h-[370px]">
      <div className="flex items-center mb-2">
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path
            fillRule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className="text-base sm:text-lg font-semibold text-indigo-600">
          Resume Verification
        </h2>
      </div>

      <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
        Verify your document for authentication{" "}
        <span className="mx-16"></span>
      </p>

      <div className="flex items-center justify-center mb-3 sm:mb-4">
        <FcViewDetails className="w-8 h-8 sm:w-24 sm:h-24" />
      </div>

      {/* <p className="text-xs sm:text-sm text-gray-600 text-center mb-3 sm:mb-4">
        Go through our verification to see what to upload
      </p> */}

      {[
        "Internship Certificate",
        "Bonafide Certificate",
        "Course Certificate",
      ].map((item, index) => (
        <div key={index} className="flex items-center mb-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-500 flex items-center justify-center mr-2">
            <span className="text-white text-[10px] sm:text-xs font-bold">
              !
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-700">{item}</p>
        </div>
      ))}

      <p className="text-xs sm:text-sm text-indigo-600 text-right mb-3 sm:mb-4">
        +3 More
      </p>

      <button onClick={()=> navigate("/resumeverification")} className="w-full bg-indigo-600 text-white rounded-xl py-2 text-xs sm:text-sm font-semibold hover:bg-indigo-700 transition duration-300">
        Verify Document
      </button>
    </div>
  );
};

export default ResumeVerification;
