import { Provider } from "react-redux";
import { MapCanvas } from "./components/Map/MapCanvas";
import store from './store'
import { DeviceCountersBar } from "./components/DeviceCountersBar/DeviceCountersBar";
import { Box } from "@mui/material";
import './app.css'
// import { FilterBar } from "./components/FilterBar/FilterBar";

const App = () => {
  return (
    <Provider store={store}>
      {/* <FilterBar /> */}
      <Box 
        style={{ 
          width: "70%", 
          height: "calc(100vh - 180px)",
          position: "absolute",
          left: "50%",
          transform:"translateX(-50%)",
          top: "7%"
        }}
      >
        <DeviceCountersBar />
        <MapCanvas />
      </Box>
    </Provider>
  )
}

export default App;
