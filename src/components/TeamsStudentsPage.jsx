import React, { useState } from "react";
import { TiGroupOutline } from "react-icons/ti";

const TeamsStudentsPage = () => {
  const [selectedTeam, setSelectedTeam] = useState(
    "2nd Yr MBA- HR & Marketing"
  );

  const teams = [
    "2nd Yr MBA- HR & Marketing",
    "2nd Yr MBA- Operations",
    "1st Yr MBA- HR & Marketing",
    "1st Yr MBA- Finance",
    "2nd Yr MBA- Finance",
  ];

  const studentsData = [
    {
      enrollmentNo: "21hr2001",
      name: "Aditya Gupta",
      resumeScore: 60,
      interviewScore: 70,
      verified: false,
    },
    {
      enrollmentNo: "21hr2002",
      name: "Aman Jangir",
      resumeScore: 75,
      interviewScore: 80,
      verified: true,
    },
    {
      enrollmentNo: "21hr2003",
      name: "Divyanshu Tripathi",
      resumeScore: 55,
      interviewScore: 50,
      verified: true,
    },
    {
      enrollmentNo: "21hr2004",
      name: "Saksham Roy",
      resumeScore: 43,
      interviewScore: 35,
      verified: false,
    },
    {
      enrollmentNo: "21hr2005",
      name: "Divyanshu Tripathi",
      resumeScore: 55,
      interviewScore: 50,
      verified: false,
    },
    {
      enrollmentNo: "21hr2006",
      name: "Debpratim Som",
      resumeScore: 55,
      interviewScore: 50,
      verified: true,
    },
    {
      enrollmentNo: "21hr2007",
      name: "Suraj Yadav",
      resumeScore: 55,
      interviewScore: 50,
      verified: false,
    },
    {
      enrollmentNo: "21hr2008",
      name: "Mann Bajpai",
      resumeScore: 55,
      interviewScore: 50,
      verified: true,
    },
    {
      enrollmentNo: "21hr2009",
      name: "Shivam Sharma",
      resumeScore: 55,
      interviewScore: 50,
      verified: true,
    },
    {
      enrollmentNo: "21hr20010",
      name: "Sunny Kumar",
      resumeScore: 55,
      interviewScore: 50,
      verified: false,
    },
  ];

  return (
    <div className="p-4 min-h-screen">
      <div className=" p-4 ">
        <div className="flex items-center mb-6">
          <TiGroupOutline className="text-4xl text-indigo-600 mr-4" />
          <h1 className="text-3xl font-bold">
            Teams & <span className="text-indigo-600">Students</span>
          </h1>
        </div>
        <h2 className="text-2xl font-semibold mb-4">{selectedTeam}</h2>
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {teams.map((team, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-xs ${
                selectedTeam === team
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedTeam(team)}
            >
              {team}
            </button>
          ))}
          <button className="px-4 py-2 rounded-full text-sm bg-gray-200 text-gray-700 hover:bg-gray-300">
            + Add Team
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Enrollment no.</th>
                <th className="text-left p-2">Name</th>
                <th className="text-left p-2">Resume Score</th>
                <th className="text-left p-2">Interview Score (Latest)</th>
                <th className="text-left p-2">Resume Verification</th>
              </tr>
            </thead>
            <tbody>
              {studentsData.map((student, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{student.enrollmentNo}</td>
                  <td className="p-2">{student.name}</td>
                  <td className="p-2">{student.resumeScore}/100</td>
                  <td className="p-2">{student.interviewScore}/100</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        student.verified
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {student.verified ? "Verified" : "Not Verified"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeamsStudentsPage;
