import React, { useState } from "react";
import { FiUpload, FiLogOut, FiCheckCircle, FiFile, FiAward } from "react-icons/fi";

const StudentDashboard = ({
  user,
  assignments,
  setAssignments,
  assignmentGrades,
  grades,
  logout,
}) => {
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files).map((file) => ({
      fileName: file.name,
      fileSize: (file.size / 1024).toFixed(2) + " KB",
      fileType: file.type.split('/')[1] || file.name.split('.').pop(),
      fileContent: URL.createObjectURL(file),
    }));
    setFiles(uploadedFiles);
    setSubmitSuccess(false);
  };

  const handleSubmit = () => {
    if (files.length === 0) {
      alert("Please upload at least one file.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const newAssignment = {
        student: user.name,
        files,
        timestamp: new Date().toLocaleString(),
      };
      setAssignments((prev) => [...prev, newAssignment]);
      setFiles([]);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  const calculateAverageGrade = () => {
    if (!grades[user.name]) return null;
    const gradeValues = Object.values(grades[user.name]).filter(grade => typeof grade === 'number');
    if (gradeValues.length === 0) return null;
    return (gradeValues.reduce((a, b) => a + b, 0) / gradeValues.length).toFixed(1);
  };

  const averageGrade = calculateAverageGrade();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-indigo-800">Student Portal</h1>
            <p className="text-indigo-600">Welcome back, <span className="font-semibold">{user.name}</span></p>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg transition-all duration-200"
          >
            <FiLogOut /> Logout
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Submission Card */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <FiUpload className="text-indigo-600 text-xl" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Submit Assignment</h2>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload your files
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all duration-200">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <FiUpload className="text-gray-500 text-2xl mb-2" />
                      <p className="text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PDF, DOCX, PPTX (MAX. 10MB)</p>
                    </div>
                    <input 
                      type="file" 
                      multiple 
                      onChange={handleUpload} 
                      className="hidden" 
                    />
                  </label>
                </div>
              </div>

              {files.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Selected files:</h3>
                  <div className="space-y-2">
                    {files.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center gap-3">
                          <FiFile className="text-indigo-500" />
                          <div>
                            <p className="text-sm font-medium">{file.fileName}</p>
                            <p className="text-xs text-gray-500">{file.fileSize} • {file.fileType.toUpperCase()}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={files.length === 0 || isSubmitting}
                className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  files.length === 0 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <FiCheckCircle /> Submit Assignment
                  </>
                )}
              </button>

              {submitSuccess && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm flex items-center gap-2 animate-fade-in">
                  <FiCheckCircle className="text-green-600" />
                  Assignment submitted successfully!
                </div>
              )}
            </div>
          </div>

          {/* Grades Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 p-3 rounded-full">
                  <FiAward className="text-purple-600 text-xl" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Your Grades</h2>
              </div>

              {averageGrade && (
                <div className="mb-6">
                  <div className="flex items-end justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-700">Overall Average</h3>
                    <span className="text-xs text-gray-500">Out of 100</span>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-purple-600">
                          {averageGrade}
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mt-2 text-xs flex rounded bg-purple-200">
                      <div 
                        style={{ width: `${averageGrade}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-600"
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-700">Subject Grades</h3>
                {grades[user.name] ? (
                  <div className="space-y-3">
                    {Object.entries(grades[user.name]).map(([subject, grade]) => (
                      <div key={subject} className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">{subject}</span>
                        <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                          typeof grade === 'number' 
                            ? grade >= 70 
                              ? 'bg-green-100 text-green-800' 
                              : grade >= 50 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-red-100 text-red-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {grade || "Pending"}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No grades available yet</p>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Assignment Grade</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Latest Submission</span>
                  <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                    assignmentGrades[user.name]
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {assignmentGrades[user.name] || "Not graded"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;