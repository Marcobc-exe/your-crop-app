import useSWR from "swr";
import getProgramByUnitId from "../../api/programsStore";

function usePrograms(unitsIds: number[]) {
  const fetcherPrograms = async (idUnit: number) => await getProgramByUnitId(idUnit);

  const { data, error, isLoading } = useSWR(
    unitsIds,
    (ids) => Promise.all(ids.map(fetcherPrograms)),
    { suspense: true }
  );

  return {
    dataPrograms: data,
    errorPrograms: error,
    loadingPrograms: isLoading,
  };
}

export default usePrograms;
