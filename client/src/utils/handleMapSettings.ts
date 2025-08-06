import { map } from '../data/map/map'

export const getInitialViewState = () => {
  const coordinates: string[] = map.center.split(";");
  const lat: number = Number.parseFloat(coordinates[0]);
  const lng: number = Number.parseFloat(coordinates[1]);
  const zoom: number = map.zoom;

  return {
    latitude: lat,
    longitude: lng,
    zoom,
    minZoom: 13,
    maxZoom: 17,
  };
};
