import React, { useState, useEffect } from "react";
import { auth } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./components/Login";
import StudentDashboard from "./components/StudentDashboard";
import TeacherDashboard from "./components/TeacherDashboard";

const App = () => {
  const [user, setUser] = useState(null);
  const [grades, setGrades] = useState({});
  const [assignments, setAssignments] = useState([]);
  const [assignmentGrades, setAssignmentGrades] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const role = localStorage.getItem("userRole");
        const name = localStorage.getItem("userName");
        if (!role || !name) {
          setUser(null);
          localStorage.removeItem("userRole");
          localStorage.removeItem("userName");
          auth.signOut();
          return;
        }
        setUser({
          email: firebaseUser.email,
          role,
          name,
        });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
    auth.signOut();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 drop-shadow-sm">
        <span className="inline-block px-6 py-2 border-2 border-indigo-600 rounded-lg bg-white shadow-md">
          📚 Grading System
        </span>
      </h1>
      <div className="w-full max-w-3xl">
        {!user && <Login setUser={setUser} />}
        {user?.role === "student" && (
          <StudentDashboard
            user={user}
            grades={grades}
            assignments={assignments}
            setAssignments={setAssignments}
            assignmentGrades={assignmentGrades}
            logout={logout}
          />
        )}
        {user?.role === "teacher" && (
          <TeacherDashboard
            assignments={assignments}
            setGrades={setGrades}
            grades={grades}
            assignmentGrades={assignmentGrades}
            setAssignmentGrades={setAssignmentGrades}
            logout={logout}
          />
        )}
      </div>
    </div>
  );
};

export default App;