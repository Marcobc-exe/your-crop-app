import { PropsMaps } from '../data/map/map'

export const getInitialViewState = (currentMap: PropsMaps) => {
  return {
    latitude: currentMap.center.lat,
    longitude: currentMap.center.lng,
    zoom: currentMap.zoom,
    minZoom: 10,
    maxZoom: 17,
  };
};
