import { GeoJsonLayer } from 'deck.gl/typed';
import { AreasProps, DataAreas } from '../types/Areas-types/types';

type ColorArea = [number, number, number, number]

export const generateLayersMap = (dataAreas: DataAreas, filterBy: boolean) => {
  return dataAreas.features.map((area: AreasProps) => {
    let arrColor: ColorArea

    if(!filterBy) {
      arrColor = [255, 255, 255, 100]
    }

    if (filterBy && area.properties.irrigating) {
      arrColor = [24, 144, 255, 185]
    }

    return new GeoJsonLayer({
      id: `${area.properties.deviceName}-sector_${area.properties.sector}-ID_${area.properties.id}`,
      data: area,
      filled: true,
      pickable: true,
      autoHighlight: false,
      getFillColor: arrColor,
      getLineColor: [0, 0, 0, 0],
    })
  })
}

export const generateHighlightsLayersMap = (dataAreas: DataAreas, object: AreasProps, setLayersHighlights): void => {
  const foundAreas = dataAreas.features.filter((areas: AreasProps) => 
    areas.properties.sector === object.properties.sector &&
    areas.properties.deviceName === object.properties.deviceName
  );

  const filter = foundAreas.map((area: AreasProps) => {
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

  setLayersHighlights(filter);
}