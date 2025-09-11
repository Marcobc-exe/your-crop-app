import { PropsMaps } from '../data/map/map'

export const getInitialViewState = (currentMap: PropsMaps) => {
  const coordinates: string[] = currentMap.center.split(";");
  const lat: number = Number.parseFloat(coordinates[0]);
  const lng: number = Number.parseFloat(coordinates[1]);
  const zoom: number = currentMap.zoom;

  return {
    latitude: lat,
    longitude: lng,
    zoom,
    minZoom: 10,
    maxZoom: 17,
  };
};
