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
import { Button } from "@mui/material";

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

  const handlefilter = () => {
    setFilterByIrrigating((currentValue) => !currentValue)
  }

  return(
    <Suspense fallback={<h2>Loading map...</h2>}>
      <DeckGl
        initialViewState={getInitialViewState(dataMap)}
        controller={true}
        style={STYLE_MAP}
        layers={[generateLayersMap(dataAreas, filterByIrrigating), layersHighlights]}
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
        <Button
          id={"irrigating"}
          onClick={handlefilter}
          sx={{
            width: "120px",
            height: "50px",
            backgroundColor: "rgba(24, 144, 255, .8)",
            color: "#d9d9d9",
            border: "2px solid #d9d9d9",
            ":hover": {
              backgroundColor: "rgba(24, 144, 255, 1)",
            }
          }}
        >
          {"Irrigating"}
        </Button>
      </DeckGl>
    </Suspense>
  )
}