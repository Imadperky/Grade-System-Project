import React, { useState } from "react";
import { db, storage, auth } from "../Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const AssignmentUploader = () => {
  const [file, setFile] = useState(null);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const uploadAssignment = async () => {
    const user = auth.currentUser;
    if (!user || !file || !subject) {
      setMessage("Please select a file, subject, and make sure you are logged in.");
      return;
    }
    try {
      const storageRef = ref(storage, `assignments/${user.uid}/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);

      await addDoc(collection(db, "assignments"), {
        studentId: user.uid,
        subject,
        fileUrl: url,
        timestamp: serverTimestamp(),
      });
      setMessage("Assignment uploaded successfully!");
    } catch (err) {
      setMessage("Upload failed: " + err.message);
    }
  };

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={e => setSubject(e.target.value)}
      />
      <button onClick={uploadAssignment}>Upload Assignment</button>
      {message && <div>{message}</div>}
    </div>
  );
};

export default AssignmentUploader;