import API from "../api/api";

export const getMyKids = async (parent_id) => {
  console.log("attempted");
  try {
    const kids = await API.get(`/student/get-my-kids/${parent_id}`);
    console.log("KIDS", kids.data.data);
    return kids.data.data;
  } catch (error) {
    console.log("ERROR", error);
    return;
  }
};

export const getStudents = async () => {
  console.log("attempted");
  try {
    let students = await API.get(`/student/all`);
    students = students.data.data;
    return students;
  } catch (error) {
    console.log("ERROR", error);
    return;
  }
};

export const getSpecificStudent = async (student_id) => {
  console.log("attempted");
  try {
    let student = await API.get(`/student/specific/${student_id}`);
    student = student.data.data;
    console.log("Student", student);
    const sessions = await API.get(
      `session/get-student-sessions/${student_id}`
    );
    student.sessions = sessions.data.data;
    return student;
  } catch (error) {
    console.log("ERROR", error);
    return;
  }
};
