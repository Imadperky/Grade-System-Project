import React, { useEffect } from "react";
import { db } from "../Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import AssignmentUploader from "./AssignmentUploader";

const StudentDashboard = ({ user, assignments, setAssignments, logout }) => {
  useEffect(() => {
    const fetchAssignments = async () => {
      if (!user) return;
      const q = query(
        collection(db, "assignments"),
        where("studentId", "==", user.email) // or user.uid if you store uid
      );
      const snapshot = await getDocs(q);
      setAssignments(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchAssignments();
  }, [user, setAssignments]);

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <AssignmentUploader onUpload={() => window.location.reload()} />
      <h2 className="text-xl font-bold mt-6 mb-2">Your Assignments</h2>
      <ul>
        {assignments.length === 0 && <li>No assignments found.</li>}
        {assignments.map(a => (
          <li key={a.id}>
            {a.subject} - <a href={a.fileUrl} target="_blank" rel="noopener noreferrer">View File</a>
            {a.grade && <span> | Grade: {a.grade}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;