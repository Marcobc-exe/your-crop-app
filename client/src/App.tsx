import { Provider } from "react-redux";
import { MapCanvas } from "./components/Map/MapCanvas";
import store from "./store";
import { DeviceCountersBar } from "./components/DeviceCountersBar/DeviceCountersBar";
import { Box } from "@mui/material";
import "./app.css";
import { LeftSide } from "./components/LeftSide/LeftSide";
import { useState } from "react";
import { maps, PropsMaps } from "./data/map/map";

const App = () => {
  const [currentMap, setCurrentMap] = useState<PropsMaps>(maps[1]);

  const handleCurrentMap = (id: string) => {
    const selectedMap = maps.find((map) => map.id === id);
    setCurrentMap(selectedMap);
  }

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
          <DeviceCountersBar />
          <MapCanvas currentMap={currentMap} />
        </div>
      </Box>
    </Provider>
  );
};

export default App;
