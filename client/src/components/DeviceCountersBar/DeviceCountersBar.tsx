import {
  Box,
  Grid,
  Tooltip,
  TooltipProps,
  styled,
  tooltipClasses,
} from "@mui/material";
import { UnitType } from "../../types/Units-types/types";
import "./index.css";
import { Suspense } from "react";
import { units } from "../../data/units/units";

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#2f3542",
    color: "rgba(255, 255, 255, 0.7)",
    maxWidth: 120,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
    position: "relative",
    top: "38px",
  },
}));

export const DeviceCountersBar = () => {
  // const { dataUnits, errorUnits, loadingUnits } = useUnits();

  // if (loadingUnits) return <h2>Loading Units...</h2>;
  // if (errorUnits) return <p>{errorUnits}</p>;

  const totalIrrigating = units.filter(
    (unit: UnitType) => unit.irrigating
  ).length;
  const totalNonIrrigating = units.filter(
    (unit: UnitType) => !unit.connected
  ).length;
  const totalFailure = units.filter((unit: UnitType) => unit.failure).length;

  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Grid container direction={"row"} className="containerCounters">
        <Grid item className="boxTitle">
          <span className="titleMap">La Vega Baja</span>
        </Grid>

        <Grid item className="boxCounter">
          <CustomTooltip title={"Total devices"} placement="top">
            <Box className="subBoxCounter">
              <span>Total</span>
              <span>{units.length}</span>
              <div className="statusCounter total" />
            </Box>
          </CustomTooltip>

          <CustomTooltip title={"Total devices irrigating"} placement="top">
            <Box className="subBoxCounter">
              <span>Irrigation</span>
              <span>{totalIrrigating}</span>
              <div className="statusCounter irrigating" />
            </Box>
          </CustomTooltip>

          <CustomTooltip title={"Total devices inactive"} placement="top">
            <Box className="subBoxCounter">
              <span>Inactive</span>
              <span>{totalNonIrrigating}</span>
              <div className="statusCounter inactive" />
            </Box>
          </CustomTooltip>

          <CustomTooltip title={"Total devices failures"} placement="top">
            <Box className="subBoxCounter">
              <span>Failure</span>
              <span>{totalFailure}</span>
              <div className="statusCounter failure" />
            </Box>
          </CustomTooltip>
        </Grid>
      </Grid>
    </Suspense>
  );
};
