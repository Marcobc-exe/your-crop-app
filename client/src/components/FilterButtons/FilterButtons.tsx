import { Box, Typography } from "@mui/material";
import {
  btnMapStyle,
  boxFilterButtons,
  txtFilter,
  divDivider,
} from "./styles.ts";
import { EventType } from "../../types/ReactElements-types/types.js";
import { FC } from "react";

type FilterButtonsProps = {
  handleIrrigating: (event: EventType) => void;
  handleCrops: (event: EventType) => void;
  handleUnits: (event: EventType) => void;
  handleFailure: (event: EventType) => void;
  filterByIrrigating: boolean;
  filterByCrop: boolean;
  showUnits: boolean;
  showFailures: boolean;
};

const FilterButtons: FC<FilterButtonsProps> = ({
  handleIrrigating,
  handleCrops,
  handleUnits,
  handleFailure,
  filterByIrrigating,
  filterByCrop,
  showUnits,
  showFailures,
}) => {
  return (
    <Box sx={boxFilterButtons}>
      <Typography sx={txtFilter}>Filter</Typography>
      <button
        id="irrigating"
        style={btnMapStyle(filterByIrrigating)}
        onClick={handleIrrigating}
      >
        Irrigating
      </button>
      <button
        id="Crops"
        style={btnMapStyle(filterByCrop)}
        onClick={handleCrops}
      >
        Crops
      </button>
      <button
        id="Failures"
        style={btnMapStyle(showFailures)}
        onClick={handleFailure}
      >
        Failures
      </button>

      <Box sx={divDivider} />
      <Typography sx={txtFilter}>Complement</Typography>
      <button id={"Units"} onClick={handleUnits} style={btnMapStyle(showUnits)}>
        Devices
      </button>
    </Box>
  );
};

export default FilterButtons;
