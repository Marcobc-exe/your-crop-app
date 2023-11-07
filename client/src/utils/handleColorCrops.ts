import { AreasProps } from "../types/Areas-types/types";
import { CropsType } from "../types/Crops-types/types.js";
import { crops } from "../constants/crops.js";

const handleColorAreas = (
  filterByIrrigating: boolean,
  area: AreasProps,
  filterByCrop: boolean,
  showFailures: boolean
) => {
  if (filterByCrop) {
    const cropFound: CropsType = crops.find(
      (crop: CropsType) => crop.cropId === area.properties.crop
    );

    if (cropFound.cropId === 1) return [86, 130, 3, 200]; // avocado
    if (cropFound.cropId === 2) return [191, 213, 142, 200]; // letttuce
    if (cropFound.cropId === 3) return [136, 221, 191, 200]; // cabbage
    if (cropFound.cropId === 4) return [255, 99, 71, 200]; // tomato
    if (cropFound.cropId === 5) return [183, 146, 104, 200]; // potato
  }

  if (filterByIrrigating && area.properties.irrigating) return [24, 144, 255, 185];

  if (showFailures && area.properties.failure) return [255, 0, 2, 185];

  return [255, 255, 255, 100];
};

const handleLineWidth = (
  filterByIrrigating: boolean,
  area: AreasProps,
  showFailures: boolean,
) => {
  if (filterByIrrigating && area.properties.irrigating) return 4;
  if (showFailures && area.properties.failure) return 6;

  return 0;
}

const handleLineColor = (
  filterByIrrigating: boolean,
  area: AreasProps,
  showFailures: boolean,
) => {
  if (filterByIrrigating && area.properties.irrigating) return [255, 255, 255, 200];
  if (showFailures && area.properties.failure) return [255, 255, 255, 200];

  return [255, 255, 255, 0];
}

export { handleColorAreas, handleLineWidth, handleLineColor };
