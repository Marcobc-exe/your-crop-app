import useSWR from "swr";
import getSectorsByUnit from "../../api/sectorsStore";

function useSectors(unitsIds: number[]) {
  const fetcher = async (idUnit: number) => await getSectorsByUnit(idUnit);

  const { data, error, isLoading } = useSWR(unitsIds, (ids) => Promise.all(ids.map(fetcher)), {
    suspense: true,
  });

  return {
    dataSectors: data,
    errorSectors: error,
    loadingSectors: isLoading,
  };
}

export default useSectors;
