import {
  Tooltip,
  TooltipProps,
  styled,
  tooltipClasses,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC, Suspense } from "react";
import { DesktopCountersBar } from "./DesktopCountersBar/DesktopCountersBar";
import { TabletCountersBar } from "./TabletCountersBar/TabletCountersBar";
import { PropsMaps } from "../../data/map/map";
import { Feature, UnitProps } from "../../data/unitsMarkers/unitsMarkers";

export const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
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

type Props = {
  currentMap: PropsMaps;
  currentUnits: UnitProps;
};

export const DeviceCountersBar: FC<Props> = ({ currentMap, currentUnits }) => {
  const theme = useTheme();
  // const isXs = useMediaQuery(theme.breakpoints.down("sm")); // <= 600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px–900px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // >= 900px

  const totalIrrigating = currentUnits.features.filter(
    (unit: Feature) => unit.properties.irrigating
  ).length;
  const totalNonIrrigating = currentUnits.features.filter(
    (unit: Feature) => !unit.properties.connected
  ).length;
  const totalFailure = currentUnits.features.filter(
    (unit: Feature) => unit.properties.failure
  ).length;

  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <DesktopCountersBar
        units={currentUnits}
        isDesktop={isDesktop}
        currentMap={currentMap}
        totalFailure={totalFailure}
        totalIrrigating={totalIrrigating}
        totalNonIrrigating={totalNonIrrigating}
      />
      <TabletCountersBar
        units={currentUnits}
        isTablet={isTablet}
        currentMap={currentMap}
        totalFailure={totalFailure}
        totalIrrigating={totalIrrigating}
        totalNonIrrigating={totalNonIrrigating}
      />
    </Suspense>
  );
};
