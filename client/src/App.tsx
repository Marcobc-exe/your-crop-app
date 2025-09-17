import { Provider } from "react-redux";
import { MapCanvas } from "./components/Map/MapCanvas";
import store from "./store";
import { DeviceCountersBar } from "./components/DeviceCountersBar/DeviceCountersBar";
import { Box } from "@mui/material";
import "./app.css";
import { LeftSide } from "./components/LeftSide/LeftSide";
import { useState } from "react";
import { maps, PropsMaps } from "./data/map/map";
import { areasVegaBaja, areasUKCrops } from "./data/areas/areas";
import { unitsUKCrops, unitsVegaBaja } from "./data/unitsMarkers/unitsMarkers";

const getMaps = async () => {
  const res = await fetch('api/maps')
  return await res.json();
}

const App = () => {
  // const res = await getMaps();
  // console.log(res);
  const [currentMap, setCurrentMap] = useState<PropsMaps>(maps[0]);
  const [currentAreas, setCurrentAreas] = useState(areasVegaBaja);
  const [currentUnits, setCurrentUnits] = useState(unitsVegaBaja);

  const handleCurrentMap = (id: string) => {
    const selectedMap = maps.find((map) => map.id === id);
    setCurrentMap(selectedMap);

    if (selectedMap.id === areasUKCrops.features[0].properties.idMap) {
      setCurrentAreas(areasUKCrops);
      setCurrentUnits(unitsUKCrops);
    } else {
      setCurrentAreas(areasVegaBaja);
      setCurrentUnits(unitsVegaBaja);
    }
  };

  return (
    <Provider store={store}>
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <LeftSide currentMap={currentMap} handleCurrentMap={handleCurrentMap} />
        <div className="rightSide">
          <DeviceCountersBar
            currentMap={currentMap}
            currentUnits={currentUnits}
          />
          <MapCanvas
            currentMap={currentMap}
            currentAreas={currentAreas}
            currentUnits={currentUnits}
          />
        </div>
      </Box>
    </Provider>
  );
};

export default App;
