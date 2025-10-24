import { Box, Grid } from "@mui/material";
import "./tabletIndex.css";
import { PropsMaps } from "../../../data/map/map";
import { FC } from "react";
import { CustomTooltip } from "../../CustomTooltip";

type Props = {
  amountDevices: number;
  isTablet: boolean;
  currentMap: PropsMaps;
  totalIrrigating: number;
  totalNonIrrigating: number;
  totalFailure: number;
};

export const TabletCountersBar: FC<Props> = ({
  amountDevices,
  isTablet,
  currentMap,
  totalIrrigating,
  totalNonIrrigating,
  totalFailure,
}) => {
  return (
    <>
      {isTablet && (
        <Grid container direction={"row"} className="containerCounters">
          <Grid item className="boxTitle">
            <span className="titleMap">{currentMap.name}</span>
          </Grid>

          <Grid item className="boxCounter">
            <CustomTooltip title={"Total devices"} placement="top">
              <Box className="subBoxCounter">
                <span>Total</span>
                <div className="counterAndBall">
                  <span>{amountDevices}</span>
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
