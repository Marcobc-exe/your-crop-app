import { AreasProps } from '../types/Areas-types/types';
import { CropsType } from '../types/Crops-types/types.js';
import { crops } from '../constants/crops.js';

const handleColorAreas = (filterBy: boolean, area: AreasProps, filterByCrop: boolean) => {
  if (filterByCrop) {
    const cropFound: CropsType = crops.find((crop: CropsType) => crop.cropId === area.properties.crop)

    if (cropFound.cropId === 1) return [86, 130, 3, 200]; // avocado
    if (cropFound.cropId === 2) return [191, 213, 142, 200]; // letttuce
    if (cropFound.cropId === 3) return [136, 221, 191, 200]; // cabbage
    if (cropFound.cropId === 4) return [255, 99, 71, 200]; // tomato
    if (cropFound.cropId === 5) return [183, 146, 104, 200]; // potato
  }

  if (filterBy && area.properties.irrigating) return [24, 144, 255, 185];

  return [255, 255, 255, 100]
}

export { handleColorAreas };