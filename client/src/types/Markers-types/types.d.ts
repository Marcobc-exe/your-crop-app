export type DevicesProps = {
  geometry: {
    coordinates: number[];
    type: string;
  };
  properties: {
    id: number;
    mapId: number;
    deviceNum: number;
    name: string;
    connected: boolean;
    failure: boolean;
    irrigating: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
};

export type MarkerTooltip = {
  layer: {
    id: string;
  };
};
