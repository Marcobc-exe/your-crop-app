import { GeoJsonLayer } from "deck.gl/typed";
import {
  DataAreas,
  AreasProps as SubAreasProps,
} from "../types/Areas-types/types";
import {
  handleColorAreas,
  handleLineColor,
  handleLineWidth,
} from "../utils/handleColorCrops";
import { AreasProps } from "../data/areas/areas";
import { CropsType } from "../types/Crops-types/types";

export const generateLayersMap = (
  currentAreas: AreasProps,
  cropsList: CropsType[],
  filterByIrrigating: boolean,
  filterByCrop: boolean,
  showFailures: boolean
) => {
  return currentAreas.features.map((area: SubAreasProps) => {
    return new GeoJsonLayer({
      id: `${area.properties.deviceName}-sector_${area.properties.sector}-ID_${area.properties.id}`,
      data: area,
      filled: true,
      pickable: true,
      autoHighlight: false,
      getFillColor: handleColorAreas(
        filterByIrrigating,
        area,
        filterByCrop,
        showFailures,
        cropsList
      ),
      getLineColor: handleLineColor(filterByIrrigating, area, showFailures),
      getLineWidth: handleLineWidth(filterByIrrigating, area, showFailures),
    });
  });
};

export const generateHighlightsLayersMap = (
  currentAreas: DataAreas,
  object: SubAreasProps
) => {
  const foundAreas = currentAreas.features.filter(
    (areas: SubAreasProps) =>
      areas.properties.sector === object.properties.sector &&
      areas.properties.deviceName === object.properties.deviceName
  );

  return foundAreas.map((area: SubAreasProps) => {
    return new GeoJsonLayer({
      id: `${area.properties.deviceName}-sector_${area.properties.sector}-ID_${area.properties.id}-highlights`,
      data: area,
      filled: true,
      pickable: true,
      autoHighlight: false,
      getFillColor: [0, 0, 0, 0],
      getLineColor: [255, 204, 0, 255],
      getLineWidth: 8,
    });
  });
};
