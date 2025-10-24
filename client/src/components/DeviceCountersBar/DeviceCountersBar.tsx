import { useMediaQuery, useTheme } from "@mui/material";
import { FC, Suspense } from "react";
import { DesktopCountersBar } from "./DesktopCountersBar/DesktopCountersBar";
import { TabletCountersBar } from "./TabletCountersBar/TabletCountersBar";
import { PropsMaps } from "../../data/map/map";
import { useDevicesByMap } from "../../features/devices/devices.hook";
import { DevicesProps } from "../../types/Markers-types/types";

type Props = {
  currentMap: PropsMaps | object;
};

export const DeviceCountersBar: FC<Props> = ({ currentMap }) => {
  const {
    data: devicesList,
    isLoading: isLoadingDevices,
    isError: isErrorDevices,
    error: errorDevices,
  } = useDevicesByMap((currentMap as PropsMaps).id || 1);
  const theme = useTheme();
  // const isXs = useMediaQuery(theme.breakpoints.down("sm")); // <= 600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px–900px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // >= 900px

  if (isLoadingDevices) return;
  if (isErrorDevices) return <p>Error devices: {errorDevices.message}</p>;

  const totalIrrigating = devicesList.filter(
    (unit: DevicesProps) => unit.properties.irrigating
  ).length;
  const totalNonIrrigating = devicesList.filter(
    (unit: DevicesProps) => !unit.properties.connected
  ).length;
  const totalFailure = devicesList.filter(
    (unit: DevicesProps) => unit.properties.failure
  ).length;

  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <DesktopCountersBar
        amountDevices={devicesList.length}
        isDesktop={isDesktop}
        currentMap={currentMap as PropsMaps}
        totalFailure={totalFailure}
        totalIrrigating={totalIrrigating}
        totalNonIrrigating={totalNonIrrigating}
      />
      <TabletCountersBar
        amountDevices={devicesList.length}
        isTablet={isTablet}
        currentMap={currentMap as PropsMaps}
        totalFailure={totalFailure}
        totalIrrigating={totalIrrigating}
        totalNonIrrigating={totalNonIrrigating}
      />
    </Suspense>
  );
};
