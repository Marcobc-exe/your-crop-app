import { Box, Grid } from "@mui/material";
import { CustomTooltip } from "../DeviceCountersBar";
import "./tabletIndex.css";

export const TabletCountersBar = ({
  units,
  isTablet,
  totalIrrigating,
  totalNonIrrigating,
  totalFailure,
}) => {
  return (
    <>
      {isTablet && (
        <Grid container direction={"row"} className="containerCounters">
          <Grid item className="boxTitle">
            <span className="titleMap">La Vega Baja</span>
          </Grid>

          <Grid item className="boxCounter">
            <CustomTooltip title={"Total devices"} placement="top">
              <Box className="subBoxCounter">
                <span>Total</span>
                <div className="counterAndBall">
                  <span>{units.length}</span>
                  <div className="statusCounter total" />
                </div>
              </Box>
            </CustomTooltip>

            <CustomTooltip title={"Total devices irrigating"} placement="top">
              <Box className="subBoxCounter">
                <span>Irrigation</span>
                <div className="counterAndBall">
                  <span>{totalIrrigating}</span>
                  <div className="statusCounter irrigating" />
                </div>
              </Box>
            </CustomTooltip>

            <CustomTooltip title={"Total devices inactive"} placement="top">
              <Box className="subBoxCounter">
                <span>Inactive</span>
                <div className="counterAndBall">
                  <span>{totalNonIrrigating}</span>
                  <div className="statusCounter inactive" />
                </div>
              </Box>
            </CustomTooltip>

            <CustomTooltip title={"Total devices failures"} placement="top">
              <Box className="subBoxCounter">
                <span>Failure</span>
                <div className="counterAndBall">
                  <span>{totalFailure}</span>
                  <div className="statusCounter failure" />
                </div>
              </Box>
            </CustomTooltip>
          </Grid>
        </Grid>
      )}
    </>
  );
};
