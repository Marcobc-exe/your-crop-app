import { GeoJsonLayer } from 'deck.gl/typed';
import { AreasProps, DataAreas } from '../types/Areas-types/types';
import { handleColorAreas, handleLineColor, handleLineWidth } from '../utils/handleColorCrops';

type ColorArea = [number, number, number, number]

export const generateLayersMap = (dataAreas: DataAreas, filterByIrrigating: boolean, filterByCrop: boolean, showFailures: boolean) => {
  return dataAreas.features.map((area: AreasProps) => {

    return new GeoJsonLayer({
      id: `${area.properties.deviceName}-sector_${area.properties.sector}-ID_${area.properties.id}`,
      data: area,
      filled: true,
      pickable: true,
      autoHighlight: false,
      getFillColor: handleColorAreas(filterByIrrigating, area, filterByCrop, showFailures),
      getLineColor: handleLineColor(filterByIrrigating, area, showFailures),
      getLineWidth: handleLineWidth(filterByIrrigating, area, showFailures)
    })
  })
}

export const generateHighlightsLayersMap = (dataAreas: DataAreas, object: AreasProps) => {
  const foundAreas = dataAreas.features.filter((areas: AreasProps) => 
    areas.properties.sector === object.properties.sector &&
    areas.properties.deviceName === object.properties.deviceName
  );

  return foundAreas.map((area: AreasProps) => {
    return new GeoJsonLayer({
      id: `${area.properties.deviceName}-sector_${area.properties.sector}-ID_${area.properties.id}-highlights`,
      data: area,
      filled: true,
      pickable: true,
      autoHighlight: false,
      getFillColor: [ 0, 0, 0, 0, ],
      getLineColor: [ 255, 204, 0, 255],
      getLineWidth: 8,
    });
  });
}

// export const generateCropsLayers = (dataAreas: DataAreas, filterByCrop: boolean) => {
//   if (filterByCrop) {
//     // const cropByArea = dataAreas.features
//     //   .map((area: AreasProps) => crops
//     //   .find((crop: CropsType) => crop.cropId === area.properties.crop));

//     const result = dataAreas.features.map((area: AreasProps) => {

//       return new GeoJsonLayer({
//         id: `crop-${area.properties.deviceName}-sector_${area.properties.sector}-ID_${area.properties.id}`,
//         data: area,
//         filled: true,
//         pickable: true,
//         autoHighlight: false,
//         getFillColor: [172, 172, 172, 200],
//         getLineColor: [0, 0, 0, 0],
//         // fillPatternEnabled: true,
//         // fillPatternMask: true,
//         // fillPatternAtlas: PATTERNS.img_avocado_pattern,
//         // fillPatternMapping: { "crop": { x: 1, y: 1, width: 1820, height: 1820, mask: false, } },
//         // getFillPattern: () => "crop",
//         // getFillPatternScale: 1,
//         // getFillPatternOffset: [0, 0],
//         // extensions: [new FillStyleExtension({ pattern: true })],
//       })
//     })

//     console.log(result)
//     return result;
//   }
// }
