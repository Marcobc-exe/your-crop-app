import {
  Tooltip,
  TooltipProps,
  styled,
  tooltipClasses,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { UnitType } from "../../types/Units-types/types";
import { Suspense } from "react";
import { units } from "../../data/units/units";
import { DesktopCountersBar } from "./DesktopCountersBar/DesktopCountersBar";
import { TabletCountersBar } from "./TabletCountersBar/TabletCountersBar";

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

export const DeviceCountersBar = () => {
  const theme = useTheme();
  // const isXs = useMediaQuery(theme.breakpoints.down("sm")); // <= 600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px–900px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // >= 900px

  const totalIrrigating = units.filter(
    (unit: UnitType) => unit.irrigating
  ).length;
  const totalNonIrrigating = units.filter(
    (unit: UnitType) => !unit.connected
  ).length;
  const totalFailure = units.filter((unit: UnitType) => unit.failure).length;

  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <DesktopCountersBar
        units={units}
        isDesktop={isDesktop}
        totalFailure={totalFailure}
        totalIrrigating={totalIrrigating}
        totalNonIrrigating={totalNonIrrigating}
      />
      <TabletCountersBar
        units={units}
        isTablet={isTablet}
        totalFailure={totalFailure}
        totalIrrigating={totalIrrigating}
        totalNonIrrigating={totalNonIrrigating}
      />
    </Suspense>
  );
};
