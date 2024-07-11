import React, { useState } from "react";
import {
  CheckCircle,
  ChevronRight,
  AlertCircle,
  Upload,
  FileText,
  Download,
} from "lucide-react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <button
          onClick={onClose}
          className="float-right text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const UploadModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <div className="p-6">
      <div className="border-2 border-dashed border-purple-200 rounded-lg p-8 text-center mb-4">
        <Upload className="mx-auto mb-4 text-purple-400" size={48} />
        <p className="text-gray-600 mb-2">
          Drag & Drop to Upload Resume or{" "}
          <span className="text-purple-500 cursor-pointer">Browse</span>
        </p>
        <p className="text-sm text-gray-500">
          Supported Resume Formats : PDF, DOCX
        </p>
      </div>
      <button className="w-full bg-purple-500 text-white py-3 rounded-lg font-medium hover:bg-purple-600 transition-colors">
        UPLOAD DOCUMENT
      </button>
    </div>
  </Modal>
);

const VerificationItem = ({
  title,
  percentage,
  isExpanded,
  onToggle,
  children,
  onUpload,
}) => (
  <div className="mb-4">
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
      <div className="flex items-center">
        <CheckCircle className="text-blue-600 mr-3" />
        <span className="font-medium">{title}</span>
      </div>
      <div className="flex items-center">
        <span className="text-blue-600 font-medium mr-4">
          {percentage}% Verified
        </span>
        <button onClick={onToggle} className="text-blue-600">
          {isExpanded ? "Verify Document" : <ChevronRight />}
        </button>
      </div>
    </div>
    {isExpanded && (
      <div className="mt-2 bg-white p-4 rounded-lg shadow">
        {children}
        <button
          onClick={onUpload}
          className="bg-purple-500 text-white px-4 py-2 rounded mt-4 hover:bg-purple-600 transition-colors"
        >
          Upload Document
        </button>
      </div>
    )}
  </div>
);
const DocumentItem = ({ name, status }) => (
  <div className="flex items-center justify-between py-2 border-b last:border-b-0">
    <span className="text-sm sm:text-base">{name}</span>
    <div className="flex items-center">
      {status === "Verified" ? (
        <CheckCircle className="text-green-500 mr-2" size={16} />
      ) : (
        <AlertCircle className="text-red-500 mr-2" size={16} />
      )}
      <span
        className={`text-sm sm:text-base ${
          status === "Verified" ? "text-green-500" : "text-red-500"
        }`}
      >
        {status}
      </span>
    </div>
  </div>
);

const ResumeUploadSection = ({ onUpload }) => (
  <div className="bg-white p-4 sm:p-6 rounded-lg shadow mb-6">
    <h2 className="text-lg sm:text-xl font-bold mb-4">Upload Your Resume</h2>
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-8 text-center">
      <Upload className="mx-auto mb-4 text-gray-400" size={36} />
      <p className="text-sm sm:text-base text-gray-600 mb-4">
        Drag and drop your resume here, or click to select a file
      </p>
      <input
        type="file"
        className="hidden"
        id="resume-upload"
        accept=".pdf,.doc,.docx"
        onChange={onUpload}
      />
      <label
        htmlFor="resume-upload"
        className="bg-blue-600 text-white px-3 py-2 text-sm sm:text-base sm:px-4 sm:py-2 rounded cursor-pointer hover:bg-blue-700 transition-colors"
      >
        Select File
      </label>
    </div>
  </div>
);

const ResumeDisplay = ({ file }) => {
  const fileUrl = URL.createObjectURL(file);
  const isPdf = file.type === "application/pdf";

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow mb-6">
      <h2 className="text-lg sm:text-xl font-bold mb-4">Uploaded Resume</h2>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-lg mb-4">
        <div className="flex items-center mb-2 sm:mb-0">
          <FileText className="text-blue-600 mr-3" size={24} />
          <div>
            <p className="font-medium text-sm sm:text-base">{file.name}</p>
            <p className="text-xs sm:text-sm text-gray-500">
              {(file.size / 1024 / 1024).toFixed(2)} MB • {file.type}
            </p>
          </div>
        </div>
        <a
          href={fileUrl}
          download={file.name}
          className="flex items-center text-blue-600 hover:text-blue-800 text-sm sm:text-base"
        >
          <Download className="mr-1" size={16} />
          Download
        </a>
      </div>
      {isPdf ? (
        <iframe
          src={fileUrl}
          className="w-full h-[400px] sm:h-[600px] border border-gray-200 rounded"
          title="Resume Preview"
        />
      ) : (
        <div className="text-center p-4 bg-gray-100 rounded">
          <p className="text-sm sm:text-base">
            Preview not available for this file type. Please download to view.
          </p>
        </div>
      )}
    </div>
  );
};

const ResumeVerification = () => {
  const [expandedSection, setExpandedSection] = useState("Education");
  const [uploadedResume, setUploadedResume] = useState(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleResumeUpload = (event) => {
    if (event.target.files.length > 0) {
      setUploadedResume(event.target.files[0]);
      console.log("Resume file selected:", event.target.files[0].name);
    }
  };

  const openUploadModal = () => {
    setIsUploadModalOpen(true);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex flex-col lg:flex-row lg:gap-6">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <VerificationItem
            title="Education"
            percentage={75}
            isExpanded={expandedSection === "Education"}
            onToggle={() => toggleSection("Education")}
            onUpload={openUploadModal}
          >
            <div className="mb-4">
              <h3 className="font-medium mb-2 text-sm sm:text-base">
                Documents
              </h3>
              <DocumentItem
                name="1. Bonafide Certificate"
                status="Not Verified"
              />
              <DocumentItem
                name="2. Grade Certificate - Rajiv Gan..."
                status="Verified"
              />
              <DocumentItem
                name="3. Grade Certificate - SVKM's..."
                status="Verified"
              />
              <DocumentItem
                name="4. Grade Certificate - Podar Int..."
                status="Verified"
              />
            </div>
          </VerificationItem>

          <VerificationItem
            title="Coursework"
            percentage={60}
            isExpanded={expandedSection === "Coursework"}
            onToggle={() => toggleSection("Coursework")}
            onUpload={openUploadModal}
          />

          <VerificationItem
            title="Skills"
            percentage={75}
            isExpanded={expandedSection === "Skills"}
            onToggle={() => toggleSection("Skills")}
            onUpload={openUploadModal}
          />

          <VerificationItem
            title="Projects"
            percentage={75}
            isExpanded={expandedSection === "Projects"}
            onToggle={() => toggleSection("Projects")}
            onUpload={openUploadModal}
          />
        </div>
        <div className="w-full lg:w-1/2">
          {uploadedResume ? (
            <ResumeDisplay file={uploadedResume} />
          ) : (
            <ResumeUploadSection onUpload={handleResumeUpload} />
          )}
        </div>
      </div>
      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />
    </div>
  );
};

export default ResumeVerification;
