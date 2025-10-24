import { AreasProps } from "../types/Areas-types/types";
import { CropsType } from "../types/Crops-types/types.js";
// import { crops } from "../constants/crops.js";

const handleColorAreas = (
  filterByIrrigating: boolean,
  area: AreasProps,
  filterByCrop: boolean,
  showFailures: boolean,
  cropsList: CropsType[]
) => {
  if (filterByCrop) {
    return cropsList.find((crop: CropsType) => crop.id === area.properties.crop)
      .color;
  }

  if (filterByIrrigating && area.properties.irrigating)
    return [24, 144, 255, 185];

  if (showFailures && area.properties.failure) return [255, 0, 2, 185];

  return [255, 255, 255, 100];
};

const handleLineWidth = (
  filterByIrrigating: boolean,
  area: AreasProps,
  showFailures: boolean
) => {
  if (filterByIrrigating && area.properties.irrigating) return 4;
  if (showFailures && area.properties.failure) return 6;

  return 0;
};

const handleLineColor = (
  filterByIrrigating: boolean,
  area: AreasProps,
  showFailures: boolean
) => {
  if (filterByIrrigating && area.properties.irrigating)
    return [255, 255, 255, 200];
  if (showFailures && area.properties.failure) return [255, 255, 255, 200];

  return [255, 255, 255, 0];
};

export { handleColorAreas, handleLineWidth, handleLineColor };
