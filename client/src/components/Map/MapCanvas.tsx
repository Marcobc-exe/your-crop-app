import DeckGl from "@deck.gl/react/typed";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MAP_STYLE, MAPBOX_TOKEN } from '../../config/configMap.ts'
import { Suspense, useState } from "react";
import useMap from "../../hooks/controllers/useMap.ts";
import { MapType } from "../../types/Map-types/types";
import useAreas from "../../hooks/controllers/useAreas.ts";
import { generateHighlightsLayersMap, generateLayersMap } from "../../utils/layers.ts";
import { handleCursorMap } from "../../utils/handleCursorMap.ts";
import { handleDeviceTooltip, handleTooltip } from "../../utils/handleTooltipMap.ts";
import FilterButtons from "../FilterButtons/FilterButtons.tsx";
import { useMarkers } from "../../hooks/controllers/useUnits.ts";
import { generateMarkers } from '../../utils/markers.ts';

const STYLE_MAP = {
	height: "calc(100vh - 180px)",
	width: "100%",
	position: "relative",
  borderRadius: "0 0 10px 0"
};

export const MapCanvas = () => {
  const { dataMap, errorMap, loadingMap } = useMap();
  const { dataAreas, errorAreas, loadingAreas } = useAreas();
  const { dataMarkers, errorMarkers, loadingMarkers } = useMarkers();

  type StateFilter = [boolean, (newFilter: boolean) => void];
  
  const [filterByIrrigating, setFilterByIrrigating]: StateFilter = useState(false);
  const [filterByCrop, setFilterByCrop]: StateFilter = useState(false)
  const [showUnits, setShowUnits]: StateFilter = useState(false)
  const [showFailures, setShowFailures]: StateFilter = useState(false)

  const [highlights, setHighlights] = useState([]);

  if (loadingMap || loadingAreas || loadingMarkers) return <h2>Loading map...</h2>
  if (errorMap) return <p>{errorMap}</p>
  if (errorAreas) return <p>{errorAreas}</p>
  if (errorMarkers) return <p>{errorMarkers}</p>

  function getInitialViewState(dataMap: MapType) {
    const coordinates: string[] = dataMap.center.split(";");
    const lat: number = Number.parseFloat(coordinates[0]);
    const lng: number = Number.parseFloat(coordinates[1]);
    const zoom: number = dataMap.zoom;
  
    return {
      latitude: lat,
      longitude: lng,
      zoom,
      minZoom: 13,
      maxZoom: 17,
    }
  }

  const handleIrrigating = () => {
    if (filterByCrop) setFilterByCrop(false)
    if (showFailures) setShowFailures(false)
    setFilterByIrrigating((currentValue) => !currentValue)
  }

  const handleCrops = () => {
    if (filterByIrrigating) setFilterByIrrigating(false)
    if (showFailures) setShowFailures(false)
    setFilterByCrop((currentValue) => !currentValue)
  }

  const handleFailure = () => {
    if (filterByIrrigating) setFilterByIrrigating(false)
    if (filterByCrop) setFilterByCrop(false)
    setShowFailures((currentValue) => !currentValue)
  }

  const handleUnits = () => {
    setShowUnits((currentValue) => !currentValue);
  }

  return(
    <Suspense fallback={<h2>Loading map...</h2>}>
      <DeckGl
        initialViewState={getInitialViewState(dataMap)}
        controller={true}
        style={STYLE_MAP}
        layers={[generateLayersMap(dataAreas, filterByIrrigating, filterByCrop, showFailures), showUnits && generateMarkers(dataMarkers), highlights]}
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

            const sectorsHighlights = generateHighlightsLayersMap(dataAreas, event.object) // set highlights
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
          minZoom={13}
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
  )
}