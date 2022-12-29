import API from "../api/api";

export const getCourses = async () => {
  try {
    const courses = await API.get("/course/all");
    // console.log("COURSES", courses.data.data);
    return courses.data.data;
    return;
  } catch (error) {
    // console.log("ERROR", error);
    return error;
  }
};
