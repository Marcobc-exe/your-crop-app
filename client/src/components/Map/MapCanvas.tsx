import DeckGl from "@deck.gl/react/typed";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MAP_STYLE, MAPBOX_TOKEN } from "../../config/configMap.ts";
import { FC, Suspense, useEffect, useState } from "react";
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
import { UnitProps } from "../../data/unitsMarkers/unitsMarkers.ts";
import { getInitialViewState } from '../../utils/handleMapSettings.ts'
import { PropsMaps } from "../../data/map/map.ts";
import { AreasProps } from "../../data/areas/areas.ts";

const STYLE_MAP = {
  height: "calc(100vh - 180px)",
  width: "100%",
  position: "relative",
  borderRadius: "0 0 10px 0",
};

type StateFilter = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

type Props = {
  currentMap : PropsMaps;
  currentAreas: AreasProps;
  currentUnits: UnitProps;
}

export const MapCanvas: FC<Props> = ({ currentMap, currentAreas, currentUnits }) => {
  const [filterByIrrigating, setFilterByIrrigating]: StateFilter =
    useState(false);
  const [filterByCrop, setFilterByCrop]: StateFilter = useState(false);
  const [showUnits, setShowUnits]: StateFilter = useState(false);
  const [showFailures, setShowFailures]: StateFilter = useState(false);
  const [highlights, setHighlights] = useState([]);

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

  useEffect(() => {
    setFilterByIrrigating(false);
    setFilterByCrop(false);
    setShowFailures(false);
    setShowUnits(false);
  }, [currentMap]);

  return (
    <Suspense fallback={<h2>Loading map...</h2>}>
      <DeckGl
        initialViewState={getInitialViewState(currentMap)}
        controller={true}
        style={STYLE_MAP}
        layers={[
          generateLayersMap(
            currentAreas,
            filterByIrrigating,
            filterByCrop,
            showFailures
          ),
          showUnits && generateMarkers(currentUnits),
          highlights,
        ]}
        getCursor={(event) => handleCursorMap(event)}
        getTooltip={(info) => {
          if (info.object) {
            if (info.object.coordinates) {
              return handleDeviceTooltip(info)
            } else {
              return handleTooltip(info.object)
            }
          }
        }}
        onHover={(event) => {
          if (event.object) {
            if (event.object.coordinates) return;

            const sectorsHighlights = generateHighlightsLayersMap(currentAreas, event.object) // set highlights
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
    </Suspense>
  );
};
