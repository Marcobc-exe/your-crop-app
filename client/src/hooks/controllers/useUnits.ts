import useSWR from "swr";
import { getUnits, getUnitsMarkers } from "../../api/unitsStore";

const useUnits = () => {
  const { data, error, isLoading } = useSWR(
    "units-la-vega-baja.json",
    getUnits,
    {
      suspense: true,
    }
  );

  return {
    dataUnits: data,
    errorUnits: error,
    loadingUnits: isLoading,
  };
}

const useMarkers = () => {
  const { data, error, isLoading } = useSWR(
    "unitsMarkers.json",
    getUnitsMarkers,
    {
      suspense: true,
    }
  );

  return {
    dataMarkers: data,
    errorMarkers: error,
    loadingMarkers: isLoading,
  };
}

export { useUnits, useMarkers };
