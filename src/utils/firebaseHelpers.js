import { db } from "../Firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

/**
 * Assign a grade to a student for a subject in Firestore.
 * @param {string} studentName - The student's name.
 * @param {string} subject - The subject name.
 * @param {string} grade - The grade to assign.
 */
export async function assignGrade(studentName, subject, grade) {
  const gradesDocRef = doc(db, "Grades", "Fs0aBoxnkY6oJGYJnA58"); // Use your actual doc ID or generate dynamically
  const docSnap = await getDoc(gradesDocRef);
  let newData = {};
  if (docSnap.exists()) {
    newData = docSnap.data();
  }
  newData[studentName] = `${subject}: ${grade}`;
  await setDoc(gradesDocRef, newData);
}