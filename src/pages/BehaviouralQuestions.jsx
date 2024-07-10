import React, { useState, useEffect, useRef } from "react";
import SideBar from "../components/SideBar";
import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import avatar from "../assets/Avatar.png";
import Timer from "../components/Timer";
import QuestionTracker from "../components/QuestionTracker";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const behaviouralQuestions = [
  {
    title: "Tell me about a time you had to manage a conflict at work.",
    description:
      "How did you handle the situation and what was the outcome?",
  },
  {
    title: "Describe a time you went above and beyond at work.",
    description:
      "What motivated you to do so and what was the result?",
  },
  // Add more questions as needed
];

const BehaviouralQuestions = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const dropdownRef = useRef(null);
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

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
      prevIndex < behaviouralQuestions.length - 1 ? prevIndex + 1 : 0
    );
    resetTranscript();
    setAnswer("");
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : behaviouralQuestions.length - 1
    );
    resetTranscript();
    setAnswer("");
  };

  const handleStartListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleStopListening = () => {
    SpeechRecognition.stopListening();
  };

  const handleTextareaChange = (e) => {
    setAnswer(e.target.value);
  };

  useEffect(() => {
    if (transcript) {
      setAnswer(transcript);
    }
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

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
          <h1 className="text-2xl font-bold">Behavioural Questions</h1>
          <QuestionTracker
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={behaviouralQuestions.length}
            handleNextQuestion={handleNextQuestion}
            handlePreviousQuestion={handlePreviousQuestion}
          />
          <Timer initialTime={1800} />
        </div>
        <div className="flex justify-center items-center flex-col mt-10">
          <div className="w-full max-w-2xl bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-[#4a42ec] mb-2">
              {behaviouralQuestions[currentQuestionIndex].title}
            </h2>
            <p className="text-gray-600 mb-4">
              {behaviouralQuestions[currentQuestionIndex].description}
            </p>
            <div className="relative border border-[#4a42ec] rounded-lg p-4">
              <textarea
                className="w-full h-40 border-none resize-none focus:ring-0"
                value={answer}
                onChange={handleTextareaChange}
              />
              <button
                onClick={listening ? handleStopListening : handleStartListening}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-[#4a42ec] focus:outline-none"
              >
                🎤
              </button>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-[#4a42ec]">
                0:00/3:00
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button className="flex items-center gap-2 text-[#4a42ec]">
                <span role="img" aria-label="Hint">💡</span> Hint
              </button>
              <button className="flex items-center gap-2 text-[#4a42ec]">
                <span role="img" aria-label="Upload">⏏️</span> Upload
              </button>
              <div className="text-gray-600">
                Or Type your answer in text for comprehensive interview practice.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehaviouralQuestions;
