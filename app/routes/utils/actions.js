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

const deleteCourier = async (courierID) => {
  try {
    const res = await fetch(`/api/couriers/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ courierID }),
    });
    const data = await res.json();
    return { success: true, response: data.data };
  } catch (e) {
    console.error("Error disconnecting courier:", e);
    return { success: false, message: "Error disconnecting courier" };
  }
};

const actions = {
  getAllCouriers,
  deleteCourier,
};
export default actions;
