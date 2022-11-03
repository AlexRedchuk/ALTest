import axios from "axios";
import { GET_JOBS } from "./types";

export const getJobs = () => {
  return async (dispatch, getState) => {
    const jobs = await axios.get("https://api.json-generator.com/templates/ZM1r0eic3XEy/data", {
      headers: {
        Authorization: "Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu",
      },
    });
    dispatch({
      type: GET_JOBS,
      payload: jobs.data,
    });
  };
};
