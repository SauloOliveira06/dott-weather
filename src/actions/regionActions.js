import axios from "axios";

export const GetRegionList = () => async dispatch => {
  try {
    dispatch({
      type: "REGION_LIST_LOADING"
    });

    const res = await axios.get(`http://api.ipma.pt/open-data/distrits-islands.json`)

    dispatch({
      type: "REGION_LIST_SUCCESS",
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: "REGION_LIST_FAIL",
    })
  }
};