// import { useUnits } from "../../hooks/controllers/useUnits";
import { Box, Grid, Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";
import { UnitType } from "../../types/Units-types/types";
import "./index.css";
import { Suspense } from "react";
import { units } from '../../data/units/units'

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
  // const { dataUnits, errorUnits, loadingUnits } = useUnits();

  // if (loadingUnits) return <h2>Loading Units...</h2>;
  // if (errorUnits) return <p>{errorUnits}</p>;

  const totalIrrigating = units.filter((unit: UnitType) => unit.irrigating).length
  const totalNonIrrigating = units.filter((unit: UnitType) => !unit.connected).length
  const totalFailure = units.filter((unit: UnitType) => unit.failure).length

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
                <span>{units.length}</span>
                <div className="statusCounter total" />
              </Box>

          </Grid>
        </HtmlTooltip>

        <HtmlTooltip title={"Total devices irrigating"} placement="top">
          <Grid item className="boxCounter">
            <Box className="subBoxCounter">
              <span>Irrigation</span>
              <span>{totalIrrigating}</span>
              <div className="statusCounter irrigating" />
            </Box>

          </Grid>
        </HtmlTooltip>

        <HtmlTooltip title={"Total devices inactive"} placement="top">
          <Grid item className="boxCounter">
            <Box className="subBoxCounter">
              <span>Inactive</span>
              <span>{totalNonIrrigating}</span>
              <div className="statusCounter inactive" />
            </Box>

          </Grid>
        </HtmlTooltip>

        <HtmlTooltip title={"Total devices failures"} placement="top">
          <Grid item className="boxCounter">
            <Box className="subBoxCounter">
              <span>Failure</span>
              <span>{totalFailure}</span>
              <div className="statusCounter failure" />
            </Box>

          </Grid>
        </HtmlTooltip>

      </Grid>
    </Suspense>
  );
};
