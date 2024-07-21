import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import axios from "axios";

const FinalLetter = () => {
  const editor = useRef(null);
  const [jobRole, setJobRole] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [answer, setAnswer] = useState("");
  const [resume, setResume] = useState(null); // State for storing the resume

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const generateAnswer = async () => {
    if (!resume) {
      setAnswer("Please upload a resume.");
      return;
    }

    setAnswer("Loading...");

    // Create FormData object to send the file and other data
    const formData = new FormData();
    formData.append('resume_file', resume);
    formData.append('job_description', jobDescription);
    formData.append('company_name', companyName);
    formData.append('job_title', jobRole);

    try {
      const response = await axios.post('http://20.197.20.87:8000/cover_letter/gen/100', formData, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        params: {
          job_description: jobDescription,
          company_name: companyName,
          job_title: jobRole,
        }
      });

      // Extract the generated content
      const generatedText = response.data.cover_letter;
      setAnswer(generatedText);
    } catch (error) {
      console.error('Error generating content:', error);
      setAnswer("Error generating content. Please try again.");
    }
  }

  return (
    <div className="flex flex-col md:flex-row p-6 min-h-screen">
      {/* Cover Letter Generator Section */}
      <div className="bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-3xl flex-1 mt-[140px]">
        <div className="flex justify-center items-center">
          <div className="bg-purple-100 w-[550px] p-6 rounded-3xl h-[700px] mt-[-120px]">
            <h2 className="text-2xl text-blue-600 mb-4">
              <span className="text-black mr-2">Generate Your</span> Cover Letter
            </h2>
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-purple-100 border-2 border-dashed border-purple-400 p-4 rounded-lg" />
              <div className="relative p-6 h-40 flex items-center justify-center">
                <input
                  type="file"
                  accept=".pdf,.docx"
                  className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                  onChange={handleFileChange} // Handle file change
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
                    <span className="text-purple-400 cursor-pointer">Browse</span>
                  </p>
                  <p className="text-gray-500 text-sm">
                    Supported Resume Formats: PDF, DOCX
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Job Role</label>
              <input
                placeholder="Enter your Job Role"
                className="w-full rounded-lg h-12 p-4"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Company Name</label>
              <input
                placeholder="Enter the Company Name"
                className="w-full rounded-lg h-12 p-4"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">
                Job Description & Company
              </label>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded h-28"
                placeholder="Enter the Job Description & Targeting Company"
              />
            </div>
            <button
              onClick={generateAnswer}
              className="w-full bg-gradient-to-br from-[#868CFF] to-[#4318FF] text-white p-2 rounded"
            >
              Generate
            </button>
          </div>
        </div>
      </div>

      {/* Editor Section */}
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6 ml-0 md:ml-6 mt-5">
        <div className="border-2 border-gray-300 rounded-lg p-4 min-h-[600px]">
          <JoditEditor
            ref={editor}
            value={answer}
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setAnswer(newContent)} // preferred to use only this option to update the content for performance reasons
          />
        </div>
      </div>
    </div>
  );
};

export default FinalLetter;
