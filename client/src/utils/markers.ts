import { DataMarkers, MarkersProps } from '../types/Markers-types/types';
import { IconLayer } from 'deck.gl/typed';
import { ICON_MAPPING, PATTERNS } from '../constants/icons.ts';

const generateMarkers = (dataMarkers: DataMarkers) => {
  const markersIcons = dataMarkers.features.map((marker: MarkersProps) => {
    return new IconLayer({
      id: `name:${marker.properties.name};id:${marker.properties.deviceId};connected:${marker.properties.connected};irrigating:${marker.properties.irrigating};failure:${marker.properties.failure}`,
      data: [marker.geometry, marker.properties],
      pickable: true, // true
      iconAtlas: PATTERNS.markerUnit,
      iconMapping: ICON_MAPPING,
      getIcon: () => 'marker',
      sizeScale: 12,
      getPosition: d => d.coordinates,
      sizeUnits: "meters",
      sizeMinPixels: 3,
      getSize: () => 8,
      // onClick: () => console.log(marker.properties.name),
    })
  });

  return markersIcons;
}

export { generateMarkers };