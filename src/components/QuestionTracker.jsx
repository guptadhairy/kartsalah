import React from 'react';

const QuestionTracker = ({ currentQuestion, totalQuestions, handleNextQuestion, handlePreviousQuestion }) => {
  const progressPercentage = ((currentQuestion / totalQuestions) * 100).toFixed(0);

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <div className="flex items-center justify-between w-full mb-2">
        <button
          className="text-gray-500 text-2xl"
          onClick={handlePreviousQuestion}
        >
          &lt;
        </button>
        <div className="text-lg font-semibold">
          Question {currentQuestion}/{totalQuestions}
        </div>
        <button
          className="text-gray-500 text-2xl"
          onClick={handleNextQuestion}
        >
          &gt;
        </button>
      </div>
      <div className="w-full h-2 rounded relative overflow-hidden bg-purple-300">
        <div
          className="absolute top-0 left-0 h-2 bg-blue-500 rounded"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="text-sm text-blue-500 mt-2">
        {progressPercentage}% completed
      </div>
    </div>
  );
};

export default QuestionTracker;
