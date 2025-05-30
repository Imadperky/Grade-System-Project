import React, { useEffect, useState } from 'react';
import { db, auth } from '../Firebase';
import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from 'firebase/firestore';
import AssignmentUploader from "./AssignmentUploader";

const AssignmentList = ({ role }) => {
  const [assignments, setAssignments] = useState([]);
  const [message, setMessage] = useState("");
  const user = auth.currentUser;

  useEffect(() => {
    const fetchAssignments = async () => {
      let q = collection(db, 'assignments');
      // Make sure you use the same field as in your uploader (studentId = user.uid)
      if (role === 'student' && user) {
        q = query(q, where('studentId', '==', user.uid));
      }
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAssignments(data);
    };
    if (user) fetchAssignments();
  }, [user, role, message]); // re-fetch on message change for instant UI update

  // This function saves the grade in Firestore
  const handleGrade = async (id) => {
    const grade = prompt("Enter grade (e.g., A+):");
    if (grade) {
      try {
        const ref = doc(db, 'assignments', id);
        await updateDoc(ref, {
          grade,
          gradedBy: user.email, // or user.uid or user.displayName
        });
        setMessage("Grade saved!");
      } catch (err) {
        setMessage("Error saving grade.");
        console.error(err);
      }
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        {role === "teacher" ? "Submitted Assignments" : "Your Submitted Assignments"}
      </h2>
      {role === "student" && (
        <AssignmentUploader onUpload={() => window.location.reload()} />
      )}
      {message && (
        <div className="mb-2 text-green-600">{message}</div>
      )}
      <div className="mb-2 text-gray-600">
        {assignments.length === 0
          ? "No assignments have been submitted yet."
          : `${assignments.length} assignment(s) submitted.`}
      </div>
      {assignments.length > 0 && (
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Student</th>
              <th className="border px-4 py-2">Subject</th>
              <th className="border px-4 py-2">File</th>
              <th className="border px-4 py-2">Grade</th>
              {role === 'teacher' && <th className="border px-4 py-2">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {assignments.map((a) => (
              <tr key={a.id}>
                <td className="border px-4 py-2">{a.studentName || a.studentId || "Unknown"}</td>
                <td className="border px-4 py-2">{a.subject}</td>
                <td className="border px-4 py-2">
                  <a href={a.fileUrl} target="_blank" rel="noopener noreferrer">
                    View File
                  </a>
                </td>
                <td className="border px-4 py-2">{a.grade || 'Not graded'}</td>
                {role === 'teacher' && (
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleGrade(a.id)}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                      Grade
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AssignmentList;