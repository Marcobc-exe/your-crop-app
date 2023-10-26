import { axios } from './config'

const getAreas = async (urlAreas: string) => {
  try {
    const response = await axios.get(`areas/${urlAreas}`)
    return response.data;
  } catch (error){
    console.log(error)
  }
}

export default getAreas;