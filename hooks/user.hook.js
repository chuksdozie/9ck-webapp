import API from "../api/api";

export const getUsers = async () => {
  console.log("attempted");
  try {
    const users = await API.get("/user/all");
    console.log("USERS", users.data.data);
    return users.data.data;
    return;
  } catch (error) {
    console.log("ERROR", error);
    return;
  }
};