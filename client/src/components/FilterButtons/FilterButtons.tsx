import { Box, Button } from "@mui/material";
import { btnIrrigating, boxFilterButtons } from "./styles.ts";
import { EventType } from "../../types/ReactElements-types/types.js";
import { FC } from "react";
import { Check, Shower, Spa } from '@mui/icons-material';

type FilterButtonsProps = {
  handleIrrigating: (event: EventType) => void;
  handleCrops: (event: EventType) => void;
  filterByIrrigating: boolean;
  filterByCrop: boolean;
};

const FilterButtons: FC<FilterButtonsProps> = ({
  handleIrrigating,
  handleCrops,
  filterByIrrigating,
  filterByCrop,
}) => {
  return (
    <Box sx={boxFilterButtons}>
      <Button
        id={"irrigating"}
        onClick={handleIrrigating}
        sx={btnIrrigating(filterByIrrigating)}
        endIcon={filterByIrrigating ? <Check color="primary"/> : <Shower />}
      >
        {"Irrigating"}
      </Button>

      <Button
        id={"irrigating"}
        onClick={handleCrops}
        sx={btnIrrigating(filterByCrop)}
        endIcon={filterByCrop ? <Check color="primary" /> : <Spa />}
      >
        {"Crops"}
      </Button>
    </Box>
  );
};

export default FilterButtons;
