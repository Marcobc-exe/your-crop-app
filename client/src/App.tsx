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

const App = () => {
  const [currentMap, setCurrentMap] = useState<PropsMaps>(maps[0]);
  const [currentAreas, setCurrentAreas] = useState(areasVegaBaja);

  const handleCurrentMap = (id: string) => {
    const selectedMap = maps.find((map) => map.id === id);
    setCurrentMap(selectedMap);
    
    if (selectedMap.id === areasUKCrops.features[0].properties.idMap) {
      setCurrentAreas(areasUKCrops);
    } else {
      setCurrentAreas(areasVegaBaja);
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
          <DeviceCountersBar currentMap={currentMap} />
          <MapCanvas currentMap={currentMap} currentAreas={currentAreas} />
        </div>
      </Box>
    </Provider>
  );
};

export default App;
