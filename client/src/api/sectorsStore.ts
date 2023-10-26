import { axios } from './config'

const getSectorsByUnit = async (idUnit: number) => {
  try {
    const response = await axios.get(`sectors/sectors-${idUnit}-la-vega-baja.json`);
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

export default getSectorsByUnit;