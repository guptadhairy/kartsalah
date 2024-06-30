import React from "react";
import temp from "../assets/Desktop6.png";
import stepper from "../assets/StepperHorizontal.png"
import { useNavigate } from "react-router-dom";

const BuildResumePage2 = () => {
    const navigate = useNavigate();
    const submitHandler = () => {
      navigate("/buildresumepage2");
    };
    
    const chooseHandler = () => {
      navigate("/buildresumepage3")
    }
  const templates = [
    {
      imgSrc: temp, // Corrected here
      alt: "Template 1",
      name: "Salman Faris",
    },
    {
      imgSrc: temp, // Ensure this path is correct
      alt: "Template 2",
      name: "Aaron Loeb",
    },
    {
      imgSrc: temp, // Ensure this path is correct
      alt: "Template 3",
      name: "Richard Sanchez",
    },
    {
      imgSrc: temp, // Ensure this path is correct
      alt: "Template 4",
      name: "Olivia Wilson",
    },
  ];

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-4xl font-medium text-center ">Build Your <span className='bg-gradient-to-br from-[#787ef1] to-[#3710e7] bg-clip-text text-transparent'>Resume</span></h2>
      <img src={stepper} alt="1 2 3 4"  className="w-[540px] h-[75px] mt-5"/>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-[100px]">
        {templates.map((template, index) => (
          <div key={index} className="border p-4">
            <img src={template.imgSrc} alt={template.alt} className="w-[300px] h-[404px]" />
          </div>
        ))}
      </div>

      {/* Fixed Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 sm:pl-[130px] right-0 bg-white shadow-2xl p-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-2 mb-4 md:mb-0">
          {[
            "bg-gray-800",
            "bg-blue-800",
            "bg-blue-500",
            "bg-purple-500",
            "bg-red-500",
          ].map((color, index) => (
            <div key={index} className={`w-6 h-6 rounded-full ${color}`} />
          ))}
        </div>
        <div className="flex space-x-4">
          <button className=" bg-gradient-to-br from-[#787ef1] to-[#3710e7] bg-clip-text text-transparent "
          onClick={submitHandler}
          >
            Skip for now
          </button>
          <button onClick={chooseHandler} className="bg-gradient-to-br from-[#787ef1] to-[#3710e7] text-white py-2 px-4 rounded-3xl">
            Choose Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuildResumePage2;
