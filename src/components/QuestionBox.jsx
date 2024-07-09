import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";

const QuestionBox = ({ question }) => {
  const editor = useRef(null);
  const [answer, setAnswer] = useState("");

  return (
    <div className="p-4 bg-white shadow-md rounded-lg sm:w-[900px] w-full">
      <div className="text-xl font-semibold mb-2 bg-gradient-to-br from-[#787ef1] to-[#3710e7] bg-clip-text text-transparent">{question.title}</div>
      <div className="mb-4">{question.description}</div>
      <JoditEditor
        ref={editor}
        value={answer}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setAnswer(newContent)} // preferred to use only this option to update the content for performance reasons
      />

      <button className="mt-4 bg-gradient-to-br from-[#787ef1] to-[#3710e7]  text-white py-2 px-4 rounded-xl">
        Submit
      </button>
    </div>
  );
};

export default QuestionBox;
