// Backend Actions
const getAllCouriers = async (storeID) => {
  let res;
  try {
    res = await fetch(`/api/couriers/get?storeID=${storeID}`, {
      method: "GET",
    });
    res = await res.json();
    return { success: true, response: res.data };
  } catch (e) {
    console.error("Error fetching couriers:", e);
    return { success: false, message: "Error fetching couriers" };
  }
};

const actions = {
  getAllCouriers,
};
export default actions;
