import React from "react";

const GradeView = ({ user, grades }) => {
  const studentGrades = grades[user.name];

  return (
    <div className="border p-4 rounded">
      <h3 className="text-lg font-semibold mb-2">My Grades</h3>
      {!studentGrades ? (
        <p>No grades yet.</p>
      ) : (
        <ul>
          {Object.entries(studentGrades).map(([subject, grade]) => (
            <li key={subject}>
              {subject}: <strong>{grade}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GradeView;
