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
import { handleTooltip } from "../../utils/handleTooltipMap.ts";
import { useLayers } from '../../hooks/layers/useLayers.ts'
import { useSelector } from "react-redux";
import FilterButtons from "../FilterButtons/FilterButtons.tsx";

const STYLE_MAP = {
	height: "calc(100vh - 180px)",
	width: "100%",
	position: "relative",
  borderRadius: "0 0 10px 0"
};

export const MapCanvas = () => {
  const { dataMap, errorMap, loadingMap } = useMap();
  const { dataAreas, errorAreas, loadingAreas } = useAreas();
  const { setLayersHighlights } = useLayers();
  const { layersHighlights } = useSelector((state) => state.areas);

  type StateFilter = [boolean, (newFilter: boolean) => void];
  
  const [filterByIrrigating, setFilterByIrrigating]: StateFilter = useState(false);
  const [filterByCrop, setFilterByCrop]: StateFilter = useState(false)

  if (loadingMap || loadingAreas) return <h2>Loading map...</h2>
  if (errorMap) return <p>{errorMap}</p>
  if (errorAreas) return <p>{errorAreas}</p>

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
    setFilterByIrrigating((currentValue) => !currentValue)
  }

  const handleCrops = () => {
    if (filterByIrrigating) setFilterByIrrigating(false)
    setFilterByCrop((currentValue) => !currentValue)
  }

  return(
    <Suspense fallback={<h2>Loading map...</h2>}>
      <DeckGl
        initialViewState={getInitialViewState(dataMap)}
        controller={true}
        style={STYLE_MAP}
        layers={[generateLayersMap(dataAreas, filterByIrrigating, filterByCrop), layersHighlights]}
        // layers={[generateCropsLayers(dataAreas, filterByCrop)]}
        getCursor={(event) => handleCursorMap(event)}
        getTooltip={(info) => info.object && handleTooltip(info.object)}
        onHover={(event) => {
          if (event.object) {
            generateHighlightsLayersMap(dataAreas, event.object, setLayersHighlights) // set highlights
          } else {
            if (layersHighlights.length > 0) {
              setLayersHighlights([]) // clean highlights
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
          filterByIrrigating={filterByIrrigating}
          filterByCrop={filterByCrop}
        />
      </DeckGl>
    </Suspense>
  )
}