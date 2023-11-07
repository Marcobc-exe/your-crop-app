import { useUnits } from "../../hooks/controllers/useUnits";
import { Box, Grid, Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";
import { UnitType } from "../../types/Units-types/types";
import "./index.css";
import { Suspense } from "react";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#2f3542',
    color: 'rgba(255, 255, 255, 0.7)',
    maxWidth: 120,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    position: "relative",
    top: "38px",
  },
}));

export const DeviceCountersBar = () => {
  const { dataUnits, errorUnits, loadingUnits } = useUnits();

  if (loadingUnits) return <h2>Loading Units...</h2>;
  if (errorUnits) return <p>{errorUnits}</p>;

  const totalIrrigating = dataUnits.filter((unit: UnitType) => unit.irrigating).length
  const totalNonIrrigating = dataUnits.filter((unit: UnitType) => !unit.connected).length
  const totalFailure = dataUnits.filter((unit: UnitType) => unit.failure).length

  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Grid
        container
        direction={"row"}
        className="containerCounters"
      >
        <Grid item className="boxCounter">
          <span className="titleMap">La Vega Baja map | Units counter</span>
        </Grid>

        <HtmlTooltip title={"Total devices"} placement="top">
          <Grid item className="boxCounter">
              <Box className="subBoxCounter">
                <span>Total</span>
                <div className="statusCounter total" />
              </Box>

              <span>{dataUnits.length}</span>
          </Grid>
        </HtmlTooltip>

        <HtmlTooltip title={"Total devices irrigating"} placement="top">
          <Grid item className="boxCounter">
            <Box className="subBoxCounter">
              <span>Irrigation</span>
              <div className="statusCounter irrigating" />
            </Box>

            <span>{totalIrrigating}</span>
          </Grid>
        </HtmlTooltip>

        <HtmlTooltip title={"Total devices inactive"} placement="top">
          <Grid item className="boxCounter">
            <Box className="subBoxCounter">
              <span>Inactive</span>
              <div className="statusCounter inactive" />
            </Box>

            <span>{totalNonIrrigating}</span>
          </Grid>
        </HtmlTooltip>

        <HtmlTooltip title={"Total devices failure"} placement="top">
          <Grid item className="boxCounter">
            <Box className="subBoxCounter">
              <span>Failure</span>
              <div className="statusCounter failure" />
            </Box>

            <span>{totalFailure}</span>
          </Grid>
        </HtmlTooltip>

      </Grid>
    </Suspense>
  );
};
