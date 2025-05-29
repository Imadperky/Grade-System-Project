import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";

const GradeView = () => {
  const [grades, setGrades] = useState({});

  useEffect(() => {
    const fetchGrades = async () => {
      const docRef = doc(db, "Grades", "Fs0aBoxnkY6oJGYJnA58");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setGrades(docSnap.data());
      }
    };
    fetchGrades();
  }, []);

  return (
    <div>
      <h2>Grades</h2>
      <ul>
        {Object.entries(grades).map(([student, grade]) => (
          <li key={student}>{student}: {grade}</li>
        ))}
      </ul>
    </div>
  );
};

export default GradeView;