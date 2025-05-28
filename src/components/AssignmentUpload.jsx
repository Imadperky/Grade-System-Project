import React, { useState } from "react";

const AssignmentUpload = ({ user, assignments, setAssignments }) => {
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newAssignment = {
          student: user.name,
          fileName: file.name,
          fileContent: e.target.result, // Base64 encoded content
          timestamp: new Date().toLocaleString(),
        };
        setAssignments([...assignments, newAssignment]);
        setFile(null);
      };
      reader.readAsDataURL(file); // Read file as base64
    }
  };

  return (
    <div className="border p-4 rounded mb-4">
      <h3 className="text-lg font-semibold mb-2">Submit Assignment</h3>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-2"
      />
      <br />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Upload Assignment
      </button>
    </div>
  );
};

export default AssignmentUpload;
