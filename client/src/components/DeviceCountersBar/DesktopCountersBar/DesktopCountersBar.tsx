import { Box, Grid } from "@mui/material";
import { CustomTooltip } from "../DeviceCountersBar";
import "./desktopIndex.css";

export const DesktopCountersBar = ({
  units,
  isDesktop,
  totalIrrigating,
  totalNonIrrigating,
  totalFailure,
}) => {
  return (
    <>
      {isDesktop && (
        <Grid container direction={"row"} className="desktopContainerCounters">
          <Grid item className="desktopBoxTitle">
            <span className="desktopTitleMap">La Vega Baja</span>
          </Grid>

          <Grid item className="desktopBoxCounter">
            <CustomTooltip title={"Total devices"} placement="top">
              <Box className="desktopSubBoxCounter">
                <span>Total</span>
                <span>{units.length}</span>
                <div className="desktopStatusCounter total" />
              </Box>
            </CustomTooltip>

            <CustomTooltip title={"Total devices irrigating"} placement="top">
              <Box className="desktopSubBoxCounter">
                <span>Irrigation</span>
                <span>{totalIrrigating}</span>
                <div className="desktopStatusCounter irrigating" />
              </Box>
            </CustomTooltip>

            <CustomTooltip title={"Total devices inactive"} placement="top">
              <Box className="desktopSubBoxCounter">
                <span>Inactive</span>
                <span>{totalNonIrrigating}</span>
                <div className="desktopStatusCounter inactive" />
              </Box>
            </CustomTooltip>

            <CustomTooltip title={"Total devices failures"} placement="top">
              <Box className="desktopSubBoxCounter">
                <span>Failure</span>
                <span>{totalFailure}</span>
                <div className="desktopStatusCounter failure" />
              </Box>
            </CustomTooltip>
          </Grid>
        </Grid>
      )}
    </>
  );
};
