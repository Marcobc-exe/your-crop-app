import useSWR from "swr";
import getMap from "../../api/mapStore";

function useMap() {
  const { data, error, isLoading } = useSWR("map-la-vega-baja.json", getMap, {
    suspense: true,
  });

  return {
    dataMap: data,
    errorMap: error,
    loadingMap: isLoading,
  };
}

export default useMap;