import API from "../api/api";

export const getCamps = async () => {
  try {
    const camps = await API.get("/camp/all");
    // console.log("CAMPS", camps.data.data);
    return camps.data.data;
    return;
  } catch (error) {
    // console.log("ERROR", error);
    return error;
  }
};
