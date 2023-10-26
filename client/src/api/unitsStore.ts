import { axios } from './config'

const getUnits = async (urlUnits: string) => {
  try {
    const response = await axios.get(`units/${urlUnits}`);
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default getUnits;