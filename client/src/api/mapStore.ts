import { api, TASKS_API_URL } from "./config";

export const getAllMaps = async () => {
  try {
    return await api.get(TASKS_API_URL);
  } catch (error) {
    console.log(error);
  }
};
