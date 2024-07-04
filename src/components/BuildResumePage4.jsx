import React, { useState } from "react";

const ResumeBuilder2 = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2 className="text-lg font-semibold text-purple-700 mb-4">
              Personal Info
            </h2>
            <form>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Umang"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Makhija"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter Email"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    PHONE
                  </label>
                  <input
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    ADD LINKEDIN
                  </label>
                  <input
                    type="url"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter LinkedIn URL"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    ADD PERSONAL LINK
                  </label>
                  <input
                    type="url"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter Personal URL"
                  />
                </div>
              </div>
            </form>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-lg font-semibold text-purple-700 mb-4">
              Summary
            </h2>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Summarize your qualifications with AI, highlighting your strengths and experience. Make a compelling case and end with a powerful closing statement."
              rows="4"
            />
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-lg font-semibold text-purple-700 mb-4">
              Experience
            </h2>
            <p className="text-xs font-medium text-gray-600 mb-2">
              Detail your key roles and major accomplishments in previous
              positions.
            </p>
            <div className="mb-6">
              <label className="block text-xs font-medium text-gray-600 mb-1">
                JOB TITLE
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mb-2"
                placeholder="e.g., Software Engineer"
              />
              <label className="block text-xs font-medium text-gray-600 mb-1">
                COMPANY
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mb-2"
                placeholder="e.g., Google"
              />
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    START DATE
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    END DATE
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <label className="block text-xs font-medium text-gray-600 mt-4 mb-1">
                DESCRIPTION
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                placeholder="Describe your role and responsibilities"
              ></textarea>
            </div>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded">
              + Add Experience
            </button>
          </div>
        );
      case 4:
        return (
          <div>
            <h2 className="text-lg font-semibold text-purple-700 mb-4">
              Projects & Skills
            </h2>
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Skills
              </h3>
              <p className="text-xs font-medium text-gray-600 mb-2">
                Showcase your key abilities and competencies. Highlight the skills
                that represent your expertise and align with job requirements
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Sales & Marketing
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Business Analytics
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Data Visualization
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Graphic Design
                </span>
              </div>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded">
                + Add Skills
              </button>
            </div>
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Project
              </h3>
              <p className="text-xs font-medium text-gray-600 mb-2">
                Detail your key projects and achievements. Highlight the projects
                that best demonstrate your expertise and impact
              </p>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                  placeholder="PROJECT TITLE"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                  placeholder="TITLE, CAPTION"
                />
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="3"
                  placeholder="DESCRIPTION"
                ></textarea>
              </div>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded">
                + Add Project
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <h2 className="text-lg font-semibold text-purple-700 mb-4">
              Education
            </h2>
            <p className="text-xs font-medium text-gray-600 mb-2">
              Share your educational background, including colleges, vocational
              programs, or training courses attended, with relevant details.
            </p>
            <div className="mb-6">
              <label className="block text-xs font-medium text-gray-600 mb-1">
                INSTITUTE NAME
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mb-2"
                placeholder="Enter Institute Name"
              />
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    DEGREE
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Select Your Degree"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    GRADUATION DATE
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    INSTITUTE LOCATION
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter The Institute Location"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    FIELD OF STUDY
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Information Technology"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" />
              <label className="text-xs font-medium text-gray-600">
                I'm Currently Enrolled
              </label>
            </div>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded mt-4">
              + Add Coursework
            </button>
          </div>
        );
      case 6:
        return (
          <div>
            <h2 className="text-lg font-semibold text-purple-700 mb-4">
              Achievements & Other Activities
            </h2>
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Achievements
              </h3>
              <p className="text-xs font-medium text-gray-600 mb-2">
                Highlight your achievements and accolades, showcasing your
                notable successes and contributions
              </p>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
              ></textarea>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Other Activities
              </h3>
              <p className="text-xs font-medium text-gray-600 mb-2">
                Describe any additional activities or interests that demonstrate
                your skills and passions outside of work or education.
              </p>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
              ></textarea>
            </div>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded mt-4">
              + Add Custom Section
            </button>
          </div>
        );
      case 7:
        return (
          <div>
            <h2 className="text-lg font-semibold text-purple-700 mb-4">
              Customize & Preview
            </h2>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex gap-4 flex-col md:flex-row">
      <div className="hidden md:block w-1/4 p-6 bg-white rounded-lg">
        <h2 className="text-lg font-semibold mb-4">
          Improvements To Be Made:
        </h2>
        <ul className="list-disc pl-5 text-sm">
          <li className="mb-2">
            <span className="font-semibold">Basic Info:</span> Highlight,
            verify and optimize essential personal details for clarity and
            professionalism
          </li>
          <li className="mb-2">
            <span className="font-semibold">Language & Grammar</span>
            <ul className="list-decimal ml-6">
              <li className="mb-1">
                <span className="font-medium">Verb & Tenses:</span> Ensure
                correct usage of verbs and tenses for clarity and consistency in
                your resume.
              </li>
              <li className="mb-1">
                <span className="font-medium">Buzzwords:</span> Identify and
                suggest impactful industry-specific terms to enhance your
                content.
              </li>
              <li className="mb-1">
                <span className="font-medium">Spell Check:</span> Detect and
                correct spelling mistakes for error-free content.
              </li>
              <li>
                <span className="font-medium">
                  Use of Personal Pronouns:
                </span>{" "}
                Guide on appropriate use of personal pronouns for effective
                communication.
              </li>
            </ul>
          </li>
          <li className="mb-2">
            <span className="font-semibold">Job Role Optimization Basis:</span>
            <ul className="list-decimal ml-6">
              <li className="mb-1">
                <span className="font-medium">Keyword Description:</span> Align
                your resume with job roles by incorporating relevant keywords to
                enhance relevance.
              </li>
              <li>
                <span className="font-medium">Content Analysis:</span> Match your
                resume aligns with job roles by evaluating and optimizing content
                for relevance and coherence
              </li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Overall Line Analysis:</span>
          </li>
        </ul>
      </div>

      <div className="w-full md:w-1/2  p-4 md:p-6 rounded">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-semibold text-purple-700">
            Enter Details
          </h1>
        </div>

        <div className="flex items-center mb-10">
          {[1, 2, 3, 4, 5, 6, 7].map((step) => (
            <React.Fragment key={step}>
              <div
                onClick={() => handleStepClick(step)}
                className={`cursor-pointer rounded-full w-8 h-8 flex items-center justify-center text-xs ${
                  step === currentStep
                    ? "bg-purple-700 text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                {step.toString().padStart(2, "0")}
              </div>
              {step < 7 && (
                <div className="flex-1 h-0.5 mx-1">
                  <div
                    className={`h-full ${
                      step < currentStep
                        ? "bg-purple-700"
                        : "bg-white border border-gray-300"
                    }`}
                    style={{ width: "100%" }}
                  ></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {renderStepContent()}

        <div className="flex justify-between mt-12">
          <button
            className="px-6 py-2 text-purple-700 font-medium"
            onClick={() => handleStepClick(currentStep - 1)}
            disabled={currentStep === 1}
          >
            Back
          </button>
          <button
            className="px-6 py-2 bg-purple-700 text-white font-medium rounded"
            onClick={() => handleStepClick(currentStep + 1)}
            disabled={currentStep === 7}
          >
            Continue
          </button>
        </div>
      </div>

      <div className="hidden md:block w-1/4 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Change Template</h2>
          <button className="text-sm text-purple-700 font-medium">
            Preview
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-2">
          <img
            src="https://via.placeholder.com/150x200" 
            alt="Resume Template"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder2;