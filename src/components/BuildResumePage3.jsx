import React from "react";
import { Button, TextField, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ResumeBuilder = () => {
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate("/buildresumepage4");
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="rounded-lg p-6 w-full max-w-2xl bg-white shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-indigo-600">
          Build Your Resume
        </h2>

        <div className="flex flex-wrap items-center justify-center space-x-4 mb-6 text-sm">
          <div className="flex items-center mb-4 sm:mb-0">
            <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="ml-2 text-gray-600">Choose Template</span>
          </div>
          <div className="h-1 bg-gray-200 flex-grow mb-4 sm:mb-0"></div>
          <div className="flex items-center mb-4 sm:mb-0">
            <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
              02
            </span>
            <span className="ml-2 text-gray-600">Enter Details</span>
          </div>
          <div className="h-1 bg-gray-200 flex-grow mb-4 sm:mb-0"></div>
          <div className="flex items-center mb-4 sm:mb-0">
            <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
              03
            </span>
            <span className="ml-2 text-gray-600">Customize & Preview</span>
          </div>
          <div className="h-1 bg-gray-200 flex-grow mb-4 sm:mb-0"></div>
          <div className="flex items-center">
            <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
              04
            </span>
            <span className="ml-2 text-gray-600">Download</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">
            What Level of Work Experience do you have?
          </h3>
          <p className="text-gray-600 text-sm mb-4 text-center">
            Share your Level of Work Experience to build your customized and
            personalized Resume
          </p>
          <div className="flex flex-wrap justify-between items-center gap-3 pl-2 pr-2">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#5046e5",
                color: "white",
                borderColor: "#5046e5",
              }}
              className="px-6 sm:px-10 py-3 rounded-md w-full sm:w-auto"
            >
              Entry Level
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#5046e5",
                color: "white",
                borderColor: "#5046e5",
              }}
              className="px-6 sm:px-10 py-3 rounded-md w-full sm:w-auto"
            >
              Mid Level
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#5046e5",
                color: "white",
                borderColor: "#5046e5",
              }}
              className="px-6 sm:px-10 py-3 rounded-md w-full sm:w-auto"
            >
              Senior Level
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">
            For Which Role do you want to Build Your Resume?
          </h3>
          <p className="text-gray-600 text-sm mb-4 text-center">
            Share your Role for which you'll build your customized and
            personalized Resume
          </p>
          <div className="w-full text-center items-center flex">
            <TextField
              select
              fullWidth
              variant="outlined"
              className="text-gray-600 text-sm mb-4 text-center"
              defaultValue="Select at Max 3 Role for Resume Building"
            >
              <MenuItem value="Select at Max 3 Role for Resume Building">
                Select at Max 3 Role for Resume Building
              </MenuItem>
              <MenuItem value="Role 1">Role 1</MenuItem>
              <MenuItem value="Role 2">Role 2</MenuItem>
            </TextField>
          </div>
        </div>

        <div className="text-center">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#5046e5",
              color: "white",
              borderColor: "#5046e5",
            }}
            className="px-6 sm:px-10 py-3 rounded-3xl w-full sm:w-auto"
            onClick={submitHandler}
          >
            Continue
          </Button>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-xs sm:text-sm">
        Terms & Conditions | Privacy Policy | Contact Us
        <br />© 2024, NOW Limited. All rights reserved.
      </div>
    </div>
  );
};

export default ResumeBuilder;
