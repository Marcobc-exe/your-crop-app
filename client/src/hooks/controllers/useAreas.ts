import useSWR from "swr";
import getAreas from "../../api/areasStore";

function useAreas() {
  const { data, error, isLoading } = useSWR(
    "areas-la-vega-baja.json",
    getAreas,
    {
      suspense: true,
    }
  );

  return {
    dataAreas: data,
    errorAreas: error,
    loadingAreas: isLoading,
  };
}

export default useAreas;