import { axios } from "./config";

const getMap = async (urlMap: string) => {
  try {
    const response = await axios.get(`maps/${urlMap}`)

    return response.data;
  } catch (error) {
    console.log(error)
  }
}

export default getMap;