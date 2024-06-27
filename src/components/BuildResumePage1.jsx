// src/components/BuildResume.js
import React from 'react';
import comp2 from "../assets/comp2.png"
import comp from "../assets/Component.png"
import comp3 from "../assets/comp3.png"
import comp4 from "../assets/comp4.png"
import frame from "../assets/Frame.png"
import { useNavigate } from 'react-router-dom';
const BuildResumePage1 = () => {
  const navigate = useNavigate();
  const submitHandler = ()=> {
    navigate("/buildresumepage2")
  }
  return (
    <div className=" p-6">
      <h2 className="text-4xl font-medium text-center ">Build Your <span className='bg-gradient-to-br from-[#787ef1] to-[#3710e7] bg-clip-text text-transparent'>Resume</span></h2>
      <div className=' flex justify-center items-center'>
      <p className="text-center mt-2 text-gray-600 w-[500px]">Effortlessly create an impressive resume by following these simple steps that grab the attention of potential employers.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-around mt-8">
        <div className="flex flex-col items-center mb-8 md:mb-0">
        <img src={comp} alt='comp' className='w-[266px] h-[406px]' />
        </div>

        <div className="flex flex-col items-center mb-8 md:mb-0">
          <img src={comp2} alt='comp' className='w-[266px] h-[443px]' />
        </div>

        <div className="flex flex-col items-center mb-8 md:mb-0">
        <img src={comp3} alt='comp' className='w-[266px] h-[402px]' />
        </div>

        <div className="flex flex-col items-center">
        <img src={comp4} alt='comp' className='w-[266px] h-[425.95px]' />
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button onClick={submitHandler} className="bg-gradient-to-br from-[#787ef1] to-[#3710e7] text-white px-6 py-2 rounded-3xl shadow-md hover:bg-blue-700 w-[232px] h-[60px] ">
          Continue
        </button>
      </div>
      <img src={frame} alt='frame' className='mt-7'/>
      <div className="mt-8 text-center text-sm">
        <a href="#" className="hover:underline">Terms & Conditions</a> | <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Contact Us</a>
        <p className="mt-2">&copy; 2024, NOW Limited. All rights reserved.</p>
      </div>
    </div>
  );
};

export default BuildResumePage1;
