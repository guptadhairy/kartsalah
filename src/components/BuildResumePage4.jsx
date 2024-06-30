import React from "react";

const ResumeBuilder2 = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left column */}
      <div className="w-1/4 p-6">
        <h2 className="text-lg font-semibold mb-4">Improvements To Be Made:</h2>
        <ul className="list-disc pl-5 text-sm">
          <li className="mb-2">
            <span className="font-semibold">Basic Info:</span> Highlight, verify
            and optimize essential personal details for clarity and
            professionalism
          </li>
        </ul>
      </div>

      {/* Center column */}
      <div className="w-1/2 bg-white p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-semibold text-purple-700">
            Enter Details
          </h1>
          <h2 className="text-lg font-semibold text-purple-700">
            Personal Info
          </h2>
        </div>

        {/* Steps */}
        <div className="flex items-center mb-10">
          {[1, 2, 3, 4, 5, 6, 7].map((step) => (
            <React.Fragment key={step}>
              <div
                className={`rounded-full w-8 h-8 flex items-center justify-center text-xs ${
                  step === 1
                    ? "bg-purple-700 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {step.toString().padStart(2, "0")}
              </div>
              {step < 7 && (
                <div className="flex-1 h-0.5 bg-gray-200 mx-1">
                  <div
                    className={`h-full ${
                      step === 1 ? "bg-purple-700" : "bg-gray-200"
                    }`}
                    style={{ width: "100%" }}
                  ></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Form */}
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

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <button className="px-6 py-2 text-purple-700 font-medium">
            Back
          </button>
          <button className="px-6 py-2 bg-purple-700 text-white font-medium rounded">
            Continue
          </button>
        </div>
      </div>

      {/* Right column */}
      <div className="w-1/4 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Change Template</h2>
          <button className="text-sm text-purple-700 font-medium">
            Preview
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-2">
          <img
            src="/api/placeholder/150/200"
            alt="Resume Template"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder2;
