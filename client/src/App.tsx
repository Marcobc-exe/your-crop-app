import { MapCanvas } from "./components/Map/MapCanvas";
import { DeviceCountersBar } from "./components/DeviceCountersBar/DeviceCountersBar";
import { Box } from "@mui/material";
import "./app.css";
import { LeftSide } from "./components/LeftSide/LeftSide";
import { useEffect, useState } from "react";
import { PropsMaps } from "./data/map/map";
import { areasVegaBaja, areasUKCrops } from "./data/areas/areas";
import { useAllMaps, useMap } from "./features/maps/maps.hook";

function loadingMap(currentMap: PropsMaps | object, isLoadingMap: boolean) {
  return isLoadingMap && (currentMap as object);
}

function loadingMapList(isLoadingMaps: boolean, isErrorMaps: boolean) {
  return isLoadingMaps || isErrorMaps ? true : false;
}

const App = () => {
  const {
    data: map,
    isLoading: isLoadingMap,
    isError: isErrorMap,
    error: errorMap,
  } = useMap(1);
  const {
    data: mapList,
    isLoading: isLoadingMaps,
    isError: isErrorMaps,
    error: errorMaps,
  } = useAllMaps();

  const [currentMap, setCurrentMap] = useState<PropsMaps | object>({});
  const [currentAreas, setCurrentAreas] = useState(areasVegaBaja);

  const fetchingMap = loadingMap(currentMap, isLoadingMap);
  const fetchingMapList = loadingMapList(isLoadingMaps, isErrorMaps);

  const handleCurrentMap = (id: number) => {
    const selectedMap = mapList.find((map) => map.id === id);
    setCurrentMap(selectedMap);

    // if (selectedMap.id === areasUKCrops.features[0].properties.idMap) {
    //   setCurrentAreas(areasUKCrops);
    //   setCurrentUnits(unitsUKCrops);
    // } else {
    //   setCurrentAreas(areasVegaBaja);
    //   setCurrentUnits(unitsVegaBaja);
    // }
  };

  useEffect(() => {
    if (map) {
      setCurrentMap(map[0]);
    }
  }, [map]);

  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {fetchingMap || fetchingMapList ? (
        <h1>Loading...</h1>
      ) : isErrorMap ? (
        <h1>{`Error map: ${(errorMap as Error).message}`}</h1>
      ) : errorMaps ? (
        <h1>{`Error maps list: ${(errorMaps as Error).message}`}</h1>
      ) : (
        <>
          <LeftSide
            currentMap={currentMap as PropsMaps}
            handleCurrentMap={handleCurrentMap}
          />
          <div className="rightSide">
            <DeviceCountersBar currentMap={currentMap} />
            <MapCanvas currentMap={currentMap} currentAreas={currentAreas} />
          </div>
        </>
      )}
    </Box>
  );
};

export default App;
