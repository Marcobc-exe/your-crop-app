import { DevicesProps } from '../types/Markers-types/types';
import { IconLayer } from 'deck.gl/typed';
import { ICON_MAPPING, PATTERNS } from '../constants/icons.ts';

export const generateMarkers = (devicesList: DevicesProps[]) => {
  return devicesList.map((unit: DevicesProps) => {
    return new IconLayer({
      id: `name:${unit.properties.name};id:${unit.properties.id}`,
      data: [unit.geometry, unit.properties],
      pickable: true, // true
      iconAtlas: PATTERNS.markerUnit,
      iconMapping: ICON_MAPPING,
      getIcon: () => 'marker',
      sizeScale: 12,
      getPosition: d => d.coordinates,
      sizeUnits: "meters",
      sizeMinPixels: 3,
      getSize: () => 8,
      // onClick: () => console.log(unit.properties.name),
    })
  });
}
