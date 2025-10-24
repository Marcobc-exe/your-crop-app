import { CropDTO, CropListSchema } from "../features/crops/crops.schemas";
import { api, CROPS_API_URL } from "./config";

export async function getAllCrops(): Promise<CropDTO> {
  const { data } = await api.get(CROPS_API_URL);
  return CropListSchema.parse(data);
}

export async function getCropById(cropId: number): Promise<CropDTO> {
  const { data } = await api.get(`${CROPS_API_URL}${cropId}/`);
  return CropListSchema.parse(data);
}
