import { MapDTO, MapListSchema } from "../features/maps/maps.schemas";
import { api, MAPS_API_URL } from "./config";

export async function getAllMaps(): Promise<MapDTO> {
  const { data } = await api.get(MAPS_API_URL);
  return MapListSchema.parse(data); // runtime validation
}

export async function getMapById(id: number): Promise<MapDTO> {
  const { data } = await api.get(`${MAPS_API_URL}/${id}`)
  return MapListSchema.parse(data);
}