import { Box, Button, Typography } from "@mui/material";
import { btnMapStyle, boxFilterButtons, txtFilter, divDivider } from "./styles.ts";
import { EventType } from "../../types/ReactElements-types/types.js";
import { FC } from "react";
import { Check, Shower, Spa, PersonalVideo, Error } from '@mui/icons-material';

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
  showFailures
}) => {
  return (
    <Box sx={boxFilterButtons}>
      <Typography sx={txtFilter}>Filter</Typography>
      <Button
        id={"irrigating"}
        onClick={handleIrrigating}
        sx={btnMapStyle(filterByIrrigating)}
        endIcon={filterByIrrigating ? <Check color="primary"/> : <Shower />}
      >
        {"Irrigating"}
      </Button>

      <Button
        id={"Crops"}
        onClick={handleCrops}
        sx={btnMapStyle(filterByCrop)}
        endIcon={filterByCrop ? <Check color="primary" /> : <Spa />}
      >
        {"Crops"}
      </Button>

      <Button
        id={"Failures"}
        onClick={handleFailure}
        sx={btnMapStyle(showFailures)}
        endIcon={showFailures ? <Check color="primary" /> : <Error />}
      >
        {"Failures"}
      </Button>

      <Box sx={divDivider}/>
      <Typography sx={txtFilter}>Complement</Typography>

      <Button
        id={"Units"}
        onClick={handleUnits}
        sx={btnMapStyle(showUnits)}
        endIcon={showUnits ? <Check color="primary" /> : <PersonalVideo />}
      >
        {"Units"}
      </Button>
    </Box>
  );
};

export default FilterButtons;
