import { maps } from '../data/map/map'

export const getInitialViewState = () => {
  const coordinates: string[] = maps[0].center.split(";");
  const lat: number = Number.parseFloat(coordinates[0]);
  const lng: number = Number.parseFloat(coordinates[1]);
  const zoom: number = maps[0].zoom;

  return {
    latitude: lat,
    longitude: lng,
    zoom,
    minZoom: 13,
    maxZoom: 17,
  };
};
