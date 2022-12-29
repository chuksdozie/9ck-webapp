import API from "../api/api";

export const getLocations = async () => {
  try {
    const locations = await API.get("/location/all");
    // console.log("LOCATIONS", locations.data.data);
    return locations.data.data;
    return;
  } catch (error) {
    // console.log("ERROR", error);
    return error;
  }
};
