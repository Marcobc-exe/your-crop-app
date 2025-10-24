import { useQuery } from "@tanstack/react-query";
import {
  getAllDevices,
  getDeviceById,
  getDevicesByMapId,
} from "../../api/devices.api";

export function useAllDevices() {
  return useQuery({
    queryKey: ["devices"],
    queryFn: () => getAllDevices(),
    staleTime: 30_000,
  });
}

export function useGetDeviceById(deviceId: number) {
  return useQuery({
    queryKey: ["device", deviceId],
    queryFn: () => getDeviceById(deviceId),
    staleTime: 30_000,
  });
}

export function useDevicesByMap(map_id: number) {
  return useQuery({
    queryKey: ["devices", map_id],
    queryFn: () => getDevicesByMapId(map_id),
    staleTime: 30_000,
  });
}
