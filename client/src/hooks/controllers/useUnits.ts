import useSWR from "swr";
import getUnits from "../../api/unitsStore";

function useUnits() {
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
  }
}

export default useUnits;