import { DataMarkers, MarkersProps } from '../types/Markers-types/types';
import { IconLayer } from 'deck.gl/typed';
import { PATTERNS } from '../constants/icons.ts';

const ICON_MAPPING = {
  "marker": { x: 0, y: 0, width: 512, height: 512 }
};

const generateMarkers = (dataMarkers: DataMarkers) => {
  const markersIcons = dataMarkers.features.map((marker: MarkersProps) => {
    return new IconLayer({
      id: `marker-${marker.properties.name}-${marker.properties.deviceId}`,
      data: [marker.geometry, marker.properties],
      pickable: false, // true
      iconAtlas: PATTERNS.markerUnit,
      iconMapping: ICON_MAPPING,
      getIcon: () => 'marker',
      sizeScale: 12,
      getPosition: d => d.coordinates,
      sizeUnits: "meters",
      sizeMinPixels: 3,
      getSize: () => 8,
    })
  });

  return markersIcons;
}

export { generateMarkers };