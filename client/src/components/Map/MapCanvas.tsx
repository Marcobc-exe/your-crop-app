import DeckGl from "@deck.gl/react/typed";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MAP_STYLE, MAPBOX_TOKEN } from "../../config/configMap.ts";
import { FC, useEffect, useState } from "react";
import {
  generateHighlightsLayersMap,
  generateLayersMap,
} from "../../utils/layers.ts";
import { handleCursorMap } from "../../utils/handleCursorMap.ts";
import {
  handleDeviceTooltip,
  handleTooltip,
} from "../../utils/handleTooltipMap.ts";
import FilterButtons from "../FilterButtons/FilterButtons.tsx";
import { generateMarkers } from "../../utils/markers.ts";
import { getInitialViewState } from "../../utils/handleMapSettings.ts";
import { PropsMaps } from "../../data/map/map.ts";
import { AreasProps } from "../../data/areas/areas.ts";
import { useDevicesByMap } from "../../features/devices/devices.hook.ts";
import { STYLE_MAP } from "../../constants/const.ts";
import { StateFilter } from "../../types/ReactElements-types/types";

type Props = {
  currentMap: PropsMaps | object;
  currentAreas: AreasProps;
};

export const MapCanvas: FC<Props> = ({ currentMap, currentAreas }) => {
  const {
    data: devicesList,
    isLoading: isLoadingDevices,
    isError: isErrorDevices,
    error: errorDevices,
  } = useDevicesByMap((currentMap as PropsMaps).id);

  const [filterByIrrigating, setFilterByIrrigating]: StateFilter =
    useState(false);
  const [filterByCrop, setFilterByCrop]: StateFilter = useState(false);
  const [showUnits, setShowUnits]: StateFilter = useState(false);
  const [showFailures, setShowFailures]: StateFilter = useState(false);
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    setFilterByIrrigating(false);
    setFilterByCrop(false);
    setShowFailures(false);
    setShowUnits(false);
  }, [currentMap]);

  if (JSON.stringify(currentMap) === "{}" && isLoadingDevices) return;
  if (isErrorDevices) return <p>Error devices: {errorDevices.message}</p>;

  const handleIrrigating = () => {
    if (filterByCrop) setFilterByCrop(false);
    if (showFailures) setShowFailures(false);
    setFilterByIrrigating((currentValue) => !currentValue);
  };

  const handleCrops = () => {
    if (filterByIrrigating) setFilterByIrrigating(false);
    if (showFailures) setShowFailures(false);
    setFilterByCrop((currentValue) => !currentValue);
  };

  const handleFailure = () => {
    if (filterByIrrigating) setFilterByIrrigating(false);
    if (filterByCrop) setFilterByCrop(false);
    setShowFailures((currentValue) => !currentValue);
  };

  const handleUnits = () => {
    setShowUnits((currentValue) => !currentValue);
  };

  return (
    <DeckGl
      initialViewState={getInitialViewState(currentMap as PropsMaps)}
      controller={true}
      style={STYLE_MAP}
      layers={[
        generateLayersMap(
          currentAreas,
          filterByIrrigating,
          filterByCrop,
          showFailures
        ),
        showUnits && generateMarkers(devicesList),
        highlights,
      ]}
      getCursor={(event) => handleCursorMap(event)}
      getTooltip={(info) => {
        if (info.object) {
          if (info.object.coordinates) {
            return handleDeviceTooltip(info);
          } else {
            return handleTooltip(info.object);
          }
        }
      }}
      onHover={(event) => {
        if (event.object) {
          if (event.object.coordinates) return;

          const sectorsHighlights = generateHighlightsLayersMap(
            currentAreas,
            event.object
          ); // set highlights
          setHighlights(sectorsHighlights);
        } else {
          if (highlights.length > 0) {
            setHighlights([]);
          }
        }
      }}
    >
      <Map
        id="map"
        mapStyle={MAP_STYLE}
        mapboxAccessToken={MAPBOX_TOKEN}
        minZoom={10}
        maxZoom={17}
      />
      <FilterButtons
        handleIrrigating={handleIrrigating}
        handleCrops={handleCrops}
        handleUnits={handleUnits}
        handleFailure={handleFailure}
        filterByIrrigating={filterByIrrigating}
        filterByCrop={filterByCrop}
        showUnits={showUnits}
        showFailures={showFailures}
      />
    </DeckGl>
  );
};
