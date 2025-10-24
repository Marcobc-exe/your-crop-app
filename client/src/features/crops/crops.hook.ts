import { useQuery } from "@tanstack/react-query";
import { getAllCrops, getCropById } from "../../api/crops.api";

export function useAllCrops() {
  return useQuery({
    queryKey: ["crops"],
    queryFn: () => getAllCrops(),
    staleTime: 30_000,
  });
}

export function useCropByID(cropId: number) {
  return useQuery({
    queryKey: ["crops", cropId],
    queryFn: () => getCropById(cropId),
    staleTime: 30_000,
  });
}
