import API from "../api/api";

export const getMyKids = async (parent_id) => {
  try {
    const kids = await API.get(`/student/get-my-kids/${parent_id}`);
    // console.log("KIDS", kids.data.data);
    return kids.data.data;
  } catch (error) {
    // console.log("ERROR", error);
    return error;
  }
};

export const getStudents = async () => {
  try {
    let students = await API.get(`/student/all`);
    students = students.data.data;
    return students;
  } catch (error) {
    // console.log("ERROR", error);
    return error;
  }
};

export const getSpecificStudent = async (student_id) => {
  try {
    let student = await API.get(`/student/specific/${student_id}`);
    student = student.data.data;
    // console.log("Student", student);
    const sessions = await API.get(
      `session/get-student-sessions/${student_id}`
    );
    student.sessions = sessions.data.data;
    return student;
  } catch (error) {
    // console.log("ERROR", error);
    return error;
  }
};

export const editStudent = async (student_id, payload) => {
  try {
    let student = await API.post(`/student/${student_id}/edit`, payload);
    student = student.data.data;
    // console.log("STUDENT EDITTED", student);
    return student;
  } catch (error) {
    // console.log("ERROR", error);
    return error;
  }
};
