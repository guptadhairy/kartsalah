import React from "react";
import Frame1CheckScore from "./Frame1CheckScore";

const AdminMainContent = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start gap-4 p-6 bg-gradient-to-br from-[#787ef1] to-[#3710e7] text-white rounded-lg shadow-lg w-full">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-2"><span className="text-black">Admin,</span></h2>
          <h2 className="text-4xl font-semibold">T & P RGIPT</h2>
          <p className="mb-6 text-black md:w-[400px] mt-4">
            Get Organized Your Resources Over Here! Subscribe To One Of Our Plans To Get Access To All Features And Benefits
          </p>
          <button className="bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition">
            EXPLORE MORE
          </button>
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between items-center mt-6">
          <div className="text-center mb-4 md:mb-0">
            <h3 className="text-2xl font-light">Enrolled</h3>
            <p className="text-2xl">78/150</p>
          </div>
          <div className="text-center mb-4 md:mb-0">
            <h3 className="text-2xl font-light">Avg. Resume Score</h3>
            <p className="text-2xl">55/100</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-light">Avg. Interview Score</h3>
            <p className="text-2xl">40/100</p>
          </div>
        </div>
      </div>
      <Frame1CheckScore />
    </div>
  );
};

export default AdminMainContent;
