import API from "../api/api";

export const getParents = async () => {
  try {
    const parents = await API.get("/parent/all");
    // console.log("PARENTS", parents.data.data);
    let foundParents = parents.data.data;

    for (let parent = 0; parent < foundParents.length; parent++) {
      const kids = await getMyKids(foundParents[parent].id);
      foundParents[parent].myKids = kids;
    }

    // console.log("COMPLETE:", foundParents);
    return foundParents;
  } catch (error) {
    // console.log("ERROR", error);
    return error;
  }
};

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

export const getSpecificParent = async (parent_id) => {
  try {
    let parent = await API.get(`/parent/specific/${parent_id}`);
    parent = parent.data.data;
    // console.log("Parent", parent);
    const kids = await getMyKids(parent.id);
    parent.myKids = kids;
    // console.log(66666, parent);
    return parent;
  } catch (error) {
    // console.log("ERROR", error);
    return error;
  }
};
