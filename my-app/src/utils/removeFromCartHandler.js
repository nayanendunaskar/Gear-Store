import axios from "axios";

export const removeFromCartHandler = async (dispatchData, itemId) => {
  try {
    const encodedToken = localStorage.getItem("userToken");
    const response = await axios.delete(`/api/user/cart/${Number(itemId)}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    console.log(response);
    console.log(itemId);
    if (response?.status === 200) {
      dispatchData({
        type: "DELETE_CART",
        payload: response?.data?.cart,
      });
    }
  } catch (error) {
    console.error(error);
  }
};