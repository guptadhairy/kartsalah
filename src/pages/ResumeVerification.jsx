import React, { useState, useEffect, useRef } from "react";
import SideBar from "../components/SideBar";
import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import avatar from "../assets/Avatar.png";
import Frame1CheckScore from "../components/Frame1CheckScore";
import ResumeScoreCard from "../components/ResumeScoreCard";
import ResumeScoreCheckHistory from "../components/ResumeScoreCheckHistory";
import ImprovementAnalysis from "../components/ImprovementAnalysis";
import Features from "../components/ExploreOtherFeatures";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TipsBanner from "../components/TipsBanner";
import Skeleton from "@mui/material/Skeleton";
import ResumeVerification from "../components/VerificationItem";

const ResumeVerificationPage = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef(null);

  // Simulate a loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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

  return (
    <div className="flex flex-col lg:flex-row h-screen relative">
      <SideBar
        isExpanded={isSidebarExpanded}
        setIsExpanded={setIsSidebarExpanded}
      />
      <div
        className={`flex-1 bg-slate-200 p-2 md:p-4 lg:py-6 lg:px-6 overflow-y-auto transition-all duration-300 lg:ml-[90px]`}
      >
        <div className="lg:pt-1 pt-14 mb-6 md:mb-8 transition-all duration-300">
          <div className="text-sm text-gray-500 font-semibold mt-4 md:mt-5">
            {loading ? <Skeleton width={100} /> : "Hello Dhairya,"}
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <div className="flex flex-col lg:flex-row items-start sm:items-center gap-2">
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
                {loading ? (
                  <Skeleton width={300} />
                ) : (
                  <>
                    Welcome to{" "}
                    <span className="bg-gradient-to-br from-[#787ef1] to-[#3710e7] bg-clip-text text-transparent">
                      SalahKart
                    </span>{" "}
                    <span className="text-base sm:text-xl md:text-2xl mt-1 sm:mt-0 font-medium">
                      {" "}
                      - Job Finding Made Easy!
                    </span>
                  </>
                )}
              </div>
            </div>
            <div className="w-full max-w-[350px] h-[40px] flex justify-between items-center px-4 lg:px-0 mt-4 sm:mt-0">
              {loading ? (
                <Skeleton variant="circular" width={24} height={24} />
              ) : (
                <IoIosSearch className="h-6 w-6 text-gray-500" />
              )}
              {loading ? (
                <Skeleton variant="circular" width={24} height={24} />
              ) : (
                <FaBell className="h-6 w-6 text-gray-500" />
              )}
              <div className="flex gap-2 bg-blue-900 rounded-full h-9 max-w-[200px] justify-between items-center p-1 relative">
                <div className="relative">
                  <div className="bg-white rounded-full h-7 w-7 flex items-center justify-center">
                    {loading ? (
                      <Skeleton variant="circular" width={28} height={28} />
                    ) : (
                      <img
                        src={avatar}
                        alt="avatar"
                        className="rounded-full h-5 w-5"
                      />
                    )}
                  </div>
                </div>
                {loading ? (
                  <Skeleton width={80} />
                ) : (
                  <div className="text-white text-sm truncate">
                    Dhairya Gupta
                  </div>
                )}
                <div onClick={toggleDropdown}>
                  {loading ? (
                    <Skeleton variant="circular" width={24} height={24} />
                  ) : (
                    <IoMdArrowDropdown className="h-6 w-6 text-white cursor-pointer" />
                  )}
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

        {/* Check Score Frame */}
        {loading ? (
          <Skeleton variant="rectangular" height={200} />
        ) : (
         <ResumeVerification />
        )}
       
       
      </div>
    </div>
  );
};

export default ResumeVerificationPage;
