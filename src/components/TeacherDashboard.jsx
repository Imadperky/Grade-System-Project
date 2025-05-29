import React, { useState } from "react";
import { assignGrade } from "../utils/firebaseHelpers";

const TeacherDashboard = ({ assignments, logout }) => {
  const [gradeInput, setGradeInput] = useState({});
  const [subjectInput, setSubjectInput] = useState({});

  const handleGrade = async (studentName, subject, id) => {
    const grade = gradeInput[id];
    if (!grade || !subject) return;
    await assignGrade(studentName, subject, grade);
    setGradeInput({ ...gradeInput, [id]: "" });
    setSubjectInput({ ...subjectInput, [id]: "" });
    alert("Grade assigned!");
  };

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <h2 className="text-xl font-bold mt-6 mb-2">All Assignments</h2>
      <ul>
        {assignments.length === 0 && <li>No assignments found.</li>}
        {assignments.map(a => (
          <li key={a.id}>
            {a.subject} - <a href={a.fileUrl} target="_blank" rel="noopener noreferrer">View File</a>
            <input
              type="text"
              placeholder="Subject"
              value={subjectInput[a.id] || ""}
              onChange={e => setSubjectInput({ ...subjectInput, [a.id]: e.target.value })}
              style={{ marginLeft: 8 }}
            />
            <input
              type="text"
              placeholder="Grade"
              value={gradeInput[a.id] || ""}
              onChange={e => setGradeInput({ ...gradeInput, [a.id]: e.target.value })}
              style={{ marginLeft: 8 }}
            />
            <button onClick={() => handleGrade(a.studentName || a.studentId, subjectInput[a.id], a.id)} style={{ marginLeft: 8 }}>
              Assign Grade
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherDashboard;