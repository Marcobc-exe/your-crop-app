import { useQuery } from "@tanstack/react-query";
import { getAllMaps, getMapById } from "../../api/maps.api";

export function useAllMaps() {
  return useQuery({
    queryKey: ["maps"],
    queryFn: getAllMaps,
    staleTime: 30_000,
  });
}

export function useMap(id: number | undefined) {
  return useQuery({
    queryKey: ["maps", id],
    queryFn: () => getMapById(id as number),
    enabled: !!id,
  });
}
