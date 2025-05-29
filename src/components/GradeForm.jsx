import React, { useState } from "react";

const subjects = ["OS", "web", "CN", "OOP", "ML"];

const GradeForm = ({ student, setGrades }) => {
  const [subjectGrades, setSubjectGrades] = useState({});

  const handleChange = (subject, value) => {
    setSubjectGrades({ ...subjectGrades, [subject]: value });
  };

  const handleSubmit = () => {
    setGrades((prev) => ({
      ...prev,
      [student]: subjectGrades,
    }));
  };

  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-sm max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
        Enter Grades for <span className="text-indigo-600">{student}</span>
      </h3>

      {subjects.map((subj) => (
        <div key={subj} className="flex items-center gap-4 mb-3">
          <label className="w-20 font-medium text-gray-700">{subj}:</label>
          <input
            type="text"
            placeholder={`Grade for ${subj}`}
            value={subjectGrades[subj] || ""}
            onChange={(e) => handleChange(subj, e.target.value)}
            className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition duration-300"
      >
        Save Grades
      </button>
    </div>
  );
};

export default GradeForm;