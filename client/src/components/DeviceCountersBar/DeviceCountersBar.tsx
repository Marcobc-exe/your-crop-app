import { useUnits } from "../../hooks/controllers/useUnits";
import { Box, Grid } from "@mui/material";
import { UnitType } from "../../types/Units-types/types";
import "./index.css";
import { Suspense } from "react";

export const DeviceCountersBar = () => {
  const { dataUnits, errorUnits, loadingUnits } = useUnits();

  if (loadingUnits) return <h2>Loading Units...</h2>;
  if (errorUnits) return <p>{errorUnits}</p>;

  const totalIrrigating = dataUnits.filter((unit: UnitType) => unit.irrigating).length
  const totalNonIrrigating = dataUnits.filter((unit: UnitType) => !unit.irrigating).length

  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Grid
        container
        direction={"row"}
        className="containerCounters"
      >
        <Grid item className="boxCounter">
          <Box className="subBoxCounter">
            <span>Total</span>
            <div className="statusCounter total" />
          </Box>

          <span>{dataUnits.length}</span>
        </Grid>
        <Grid item className="boxCounter">
          <Box className="subBoxCounter">
            <span>Irrigating</span>
            <div className="statusCounter irrigating" />
          </Box>

          <span>{totalIrrigating}</span>
        </Grid>
        <Grid item className="boxCounter">
          <Box className="subBoxCounter">
            <span>Inactive</span>
            <div className="statusCounter inactive" />
          </Box>

          <span>{totalNonIrrigating}</span>
        </Grid>
      </Grid>
    </Suspense>
  );
};
