import {
  DeviceDTO,
  DeviceListSchema,
  DeviceIdDTO,
  DeviceSchemaTransform,
} from "../features/devices/devices.schemas";
import { api, DEVICES_API_URL } from "./config";

export async function getAllDevices(): Promise<DeviceDTO> {
  const { data } = await api.get(DEVICES_API_URL);
  return DeviceListSchema.parse(data);
}

export async function getDeviceById(
  deviceId: number
): Promise<DeviceIdDTO> {
  const { data } = await api.get(`${DEVICES_API_URL}/${deviceId}`);
  return DeviceSchemaTransform.parse(data);
}

export async function getDevicesByMapId(mapId: number): Promise<DeviceDTO> {
  const { data } = await api.get(`${DEVICES_API_URL}/map/${mapId}`);
  return DeviceListSchema.parse(data);
}
