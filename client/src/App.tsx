import { Provider } from "react-redux";
import { MapCanvas } from "./components/Map/MapCanvas";
import store from "./store";
import { DeviceCountersBar } from "./components/DeviceCountersBar/DeviceCountersBar";
import { Box } from "@mui/material";
import "./app.css";
import { LeftSide } from "./components/LeftSide/LeftSide";

const App = () => (
  <Provider store={store}>
    <Box
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row"
      }}
    >
      <LeftSide />
      <div className="rightSide">
        <DeviceCountersBar />
        <MapCanvas />
      </div>
    </Box>
  </Provider>
);

export default App;
