import React, { useState, useEffect, useRef } from "react";
import SideBar from "../components/SideBar";
import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import avatar from "../assets/Avatar.png";
import Timer from "../components/Timer";
import QuestionTracker from "../components/QuestionTracker";
import QuestionBox from "../components/QuestionBox";

const questions = [
  {
    title: "What is your Product Management Process?",
    description:
      "Can you walk me through a product you’ve managed from its conceptual phase to launch, highlighting the key milestones?",
  },
  {
    title: "Describe a challenging project you've managed.",
    description:
      "What were the key challenges, and how did you overcome them?",
  },
  {
    title: "How do you prioritize tasks in a project?",
    description:
      "Explain your process for determining task priority and managing deadlines.",
  },
  {
    title: "What tools do you use for project management?",
    description:
      "Describe the tools you have used and how they benefited your projects.",
  },
  {
    title: "How do you handle project risks?",
    description:
      "Explain your approach to identifying, assessing, and mitigating risks in a project.",
  },
  {
    title: "Can you discuss a successful project you managed?",
    description:
      "What were the key factors that contributed to its success?",
  },
  {
    title: "How do you communicate with stakeholders?",
    description:
      "Describe your strategy for keeping stakeholders informed and involved.",
  },
  {
    title: "What is your experience with Agile methodologies?",
    description:
      "How have you implemented Agile practices in your projects?",
  },
  {
    title: "How do you ensure project quality?",
    description:
      "Explain your process for maintaining high quality throughout a project's lifecycle.",
  },
  {
    title: "Describe a time when you had to manage a project with limited resources.",
    description:
      "How did you ensure the project was completed successfully?",
  },
];

const TechnicalQuestions = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownExpanded(!isDropdownExpanded);
  };

  const closeDropdown = () => {
    setIsDropdownExpanded(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : questions.length - 1
    );
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <SideBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div
        className={`flex-1 bg-slate-200 p-2 md:p-4 lg:py-6 lg:px-6 overflow-y-auto transition-all duration-300 lg:ml-[90px]`}
      >
        <div className="lg:pt-1 pt-14 mb-6 md:mb-8 transition-all duration-300">
          <div className="text-sm text-gray-500 font-semibold mt-4 md:mt-5">
            Hello Dhairya,
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <div className="flex flex-col lg:flex-row items-start sm:items-center gap-2">
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
                Welcome to{" "}
                <span className="bg-gradient-to-br from-[#787ef1] to-[#3710e7] bg-clip-text text-transparent">
                  SalahKart
                </span>{" "}
                <span className="text-base sm:text-xl md:text-2xl mt-1 sm:mt-0 font-medium">
                  {" "}
                  - Job Finding Made Easy!
                </span>
              </div>
            </div>
            <div className="w-full max-w-[350px] h-[40px] flex justify-between items-center px-4 lg:px-0 mt-4 sm:mt-0">
              <IoIosSearch className="h-6 w-6 text-gray-500" />
              <FaBell className="h-6 w-6 text-gray-500" />
              <div className="flex gap-2 bg-blue-900 rounded-full h-9 max-w-[200px] justify-between items-center p-1 relative">
                <div className="relative">
                  <div className="bg-white rounded-full h-7 w-7 flex items-center justify-center">
                    <img
                      src={avatar}
                      alt="avatar"
                      className="rounded-full h-5 w-5"
                    />
                  </div>
                </div>
                <div className="text-white text-sm truncate">Dhairya Gupta</div>
                <div onClick={toggleDropdown}>
                  <IoMdArrowDropdown className="h-6 w-6 text-white cursor-pointer" />
                </div>
                {isDropdownExpanded && (
                  <div
                    ref={dropdownRef}
                    className="absolute right-0 mt-[150px] w-48 bg-white rounded-lg shadow-lg z-10"
                  >
                    <button
                      onClick={closeDropdown}
                      className="block w-full text-left py-2 px-4 text-sm text-gray-800 hover:bg-gray-200 focus:outline-none"
                    >
                      Sign Out
                    </button>
                    <button
                      onClick={closeDropdown}
                      className="block w-full text-left py-2 px-4 text-sm text-gray-800 hover:bg-gray-200 focus:outline-none"
                    >
                      Update Profile
                    </button>
                    <button
                      onClick={closeDropdown}
                      className="block w-full text-left py-2 px-4 text-sm text-gray-800 hover:bg-gray-200 focus:outline-none"
                    >
                      Settings
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center mb-4 px-4">
          <div>
            <h1 className="text-4xl font-semibold">Interview</h1>
            <h1 className="text-5xl bg-gradient-to-br from-[#787ef1] to-[#3710e7] bg-clip-text text-transparent mb-4">Questions</h1>
          </div>

          <QuestionTracker
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            handleNextQuestion={handleNextQuestion}
            handlePreviousQuestion={handlePreviousQuestion}
          />
          <Timer initialTime={1800} />
        </div>
        <div className="flex justify-center items-center flex-col mt-10">
          <QuestionBox question={questions[currentQuestionIndex]} />
        </div>
      </div>
    </div>
  );
};

export default TechnicalQuestions;
