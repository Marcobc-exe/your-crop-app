import { DeviceDTO, DeviceListSchema } from "../features/devices/devices.schemas";
import { api, DEVICES_API_URL } from "./config";

export async function getAllDevices(): Promise<DeviceDTO> {
  const { data } = await api.get(DEVICES_API_URL);
  return DeviceListSchema.parse(data);
}
