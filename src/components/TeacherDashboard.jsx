import React, { useState, useEffect } from "react";
import { FiLogOut, FiSave, FiFile, FiBook, FiAward, FiUser } from "react-icons/fi";
import { db } from "../Firebase";
import { doc, updateDoc, collection, getDocs } from "firebase/firestore";

const TeacherDashboard = ({
  setGrades,
  grades,
  assignmentGrades,
  setAssignmentGrades,
  logout,
}) => {
  const [assignments, setAssignments] = useState([]);
  const [gradeInputs, setGradeInputs] = useState({});
  const [assignmentInput, setAssignmentInput] = useState({});
  const [activeTab, setActiveTab] = useState("grading");
  const [searchTerm, setSearchTerm] = useState("");

  const subjects = ["OS", "WEB", "CN", "OOP", "ML"];

  // Fetch all assignments for teachers
  useEffect(() => {
    const fetchAssignments = async () => {
      const q = collection(db, "assignments");
      const snapshot = await getDocs(q);
      setAssignments(snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })));
    };
    fetchAssignments();
  }, []);

  const handleSubjectGradeChange = (student, subject, value) => {
    setGradeInputs((prev) => ({
      ...prev,
      [student]: {
        ...(prev[student] || {}),
        [subject]: value,
      },
    }));
  };

  const handleAssignmentGradeChange = (student, value) => {
    setAssignmentInput((prev) => ({
      ...prev,
      [student]: value,
    }));
  };

  const saveGrades = async (student) => {
    if (gradeInputs[student]) {
      setGrades((prev) => ({
        ...prev,
        [student]: gradeInputs[student],
      }));
    }

    if (assignmentInput[student]) {
      setAssignmentGrades((prev) => ({
        ...prev,
        [student]: assignmentInput[student],
      }));
    }

    // --- Firestore update logic START ---
    const assignment = assignments.find(a => a.student === student);
    if (assignment) {
      try {
        const ref = doc(db, "assignments", assignment.id);
        await updateDoc(ref, {
          grade: assignmentInput[student] || "",
          subjectGrades: gradeInputs[student] || {},
        });
      } catch (err) {
        console.error("Error saving grades:", err);
      }
    }
    // --- Firestore update logic END ---
  };

  // Debug: Show all assignments fetched from Firestore
  // Remove this <pre> after debugging!
  // const debugAssignments = (
  //   <pre style={{ background: "#f3f3f3", padding: 10, marginBottom: 20 }}>
  //     {JSON.stringify(assignments, null, 2)}
  //   </pre>
  // );

  const filteredAssignments = assignments.filter(assignment =>
    assignment.student?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Debug output */}
        {/* {debugAssignments} */}

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-indigo-800 flex items-center gap-2">
              <FiBook className="text-indigo-600" /> Teacher Portal
            </h1>
            <p className="text-indigo-600">Manage student submissions and grades</p>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg transition-all duration-200"
          >
            <FiLogOut /> Logout
          </button>
        </div>

        {/* Dashboard Content */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab("grading")}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center gap-2 ${
                  activeTab === "grading"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <FiAward /> Grading
              </button>
              <button
                onClick={() => setActiveTab("students")}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center gap-2 ${
                  activeTab === "students"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <FiUser /> Students
              </button>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6">
            {activeTab === "grading" && (
              <>
                {filteredAssignments.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="mx-auto h-24 w-24 text-gray-400">
                      <FiFile className="w-full h-full" />
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-gray-900">No assignments submitted</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Students haven't submitted any assignments yet.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredAssignments.map((assignment, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow duration-200">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-3">
                              <div className="bg-indigo-100 p-2 rounded-full">
                                <FiUser className="text-indigo-600" />
                              </div>
                              <h3 className="text-lg font-semibold text-gray-800">
                                {assignment.student}
                              </h3>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">
                              Submitted on {assignment.timestamp?.toDate ? assignment.timestamp.toDate().toLocaleString() : ""}
                            </p>
                          </div>
                          <button
                            onClick={() => saveGrades(assignment.student)}
                            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-200"
                          >
                            <FiSave /> Save Grades
                          </button>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Submitted Files</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {assignment.files?.map((file, idx) => (
                              <a
                                key={idx}
                                href={file.fileContent}
                                download={file.fileName}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                              >
                                <div className="bg-blue-100 p-2 rounded-lg">
                                  <FiFile className="text-blue-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate">
                                    {file.fileName}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {file.fileSize}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-base font-semibold text-gray-800 mb-3">Subject Grades</h4>
                            <div className="space-y-3">
                              {subjects.map((subject) => (
                                <div key={subject} className="flex items-center justify-between">
                                  <label className="text-sm font-medium text-gray-700 w-24">{subject}</label>
                                  <div className="flex items-center gap-2">
                                    <input
                                      type="text"
                                      placeholder="Grade"
                                      value={gradeInputs[assignment.student]?.[subject] || ""}
                                      onChange={(e) =>
                                        handleSubjectGradeChange(assignment.student, subject, e.target.value)
                                      }
                                      className="border border-gray-300 rounded-md px-3 py-1 w-20 text-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    <span className="text-xs text-gray-500 w-10">
                                      {grades[assignment.student]?.[subject] || "N/A"}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-base font-semibold text-gray-800 mb-3">Assignment Grade</h4>
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-gray-700">Overall Grade</label>
                                <div className="flex items-center gap-2">
                                  <input
                                    type="text"
                                    placeholder="A / B+ / C-"
                                    value={assignmentInput[assignment.student] || ""}
                                    onChange={(e) =>
                                      handleAssignmentGradeChange(assignment.student, e.target.value)
                                    }
                                    className="border border-gray-300 rounded-md px-3 py-1 w-20 text-sm focus:ring-indigo-500 focus:border-indigo-500"
                                  />
                                  <span className="text-xs text-gray-500 w-10">
                                    {assignmentGrades[assignment.student] || "N/A"}
                                  </span>
                                </div>
                              </div>
                              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <div className="flex">
                                  <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-sm text-yellow-700">
                                      Remember to save grades after making changes.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {activeTab === "students" && (
              <div className="text-center py-12">
                <div className="mx-auto h-24 w-24 text-gray-400">
                  <FiUser className="w-full h-full" />
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-900">Student Management</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Student management features coming soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;