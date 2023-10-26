import { axios } from './config'

const getProgramByUnitId = async (idUnit: number) => {
  try {
    const response = await axios.get(`programs/programs-${idUnit}-la-vega-baja.json`)
    return response.data;
  } catch (error) {
    console.log(error) 
  }
}

export default getProgramByUnitId;