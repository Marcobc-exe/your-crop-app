import { Box, Grid } from "@mui/material";
import "./desktopIndex.css";
import { FC } from "react";
import { PropsMaps } from "../../../data/map/map";
import { CustomTooltip } from "../../CustomTooltip";

type Props = {
  amountDevices: number;
  isDesktop: boolean;
  currentMap: PropsMaps;
  totalIrrigating: number;
  totalNonIrrigating: number;
  totalFailure: number;
}

export const DesktopCountersBar: FC<Props> = ({
  amountDevices,
  isDesktop,
  currentMap,
  totalIrrigating,
  totalNonIrrigating,
  totalFailure,
}) => {
  return (
    <>
      {isDesktop && (
        <Grid container direction={"row"} className="desktopContainerCounters">
          <Grid item className="desktopBoxTitle">
            <span className="desktopTitleMap">{currentMap.name}</span>
          </Grid>

          <Grid item className="desktopBoxCounter">
            <CustomTooltip title={"Total devices"} placement="top">
              <Box className="desktopSubBoxCounter">
                <span>Total</span>
                <span>{amountDevices}</span>
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
