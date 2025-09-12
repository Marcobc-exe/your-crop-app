export type Feature = {
  type: string;
  properties: {
    markerId: string;
    deviceId: number;
    name: string;
    connected: boolean;
    failure: boolean;
    irrigating: boolean;
  };
  geometry: {
    coordinates: number[];
    type: string;
  };
};

export type UnitProps = {
  type: string;
  features: Feature[];
};

export const unitsVegaBaja: UnitProps = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        markerId: "fafa60f5-f3c9-4fa6-8fd1-9f1d2319385c",
        deviceId: 3061,
        name: "LA VEGA BAJA EQ 1",
        connected: true,
        failure: false,
        irrigating: true,
      },
      geometry: {
        coordinates: [-70.96481579692541, -32.42397762300963],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        markerId: "586118dc-78ed-11ee-b962-0242ac120002",
        deviceId: 3062,
        name: "LA VEGA BAJA EQ 2",
        connected: true,
        failure: false,
        irrigating: true,
      },
      geometry: {
        coordinates: [-70.95112636019162, -32.428146514597046],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        markerId: "8fc6551c-78ed-11ee-b962-0242ac120002",
        deviceId: 3063,
        name: "LA VEGA BAJA EQ 3",
        connected: true,
        failure: true,
        irrigating: false,
      },
      geometry: {
        coordinates: [-70.94397588037559, -32.42446132251308],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        markerId: "a496a852-78ed-11ee-b962-0242ac120002",
        deviceId: 3064,
        name: "LA VEGA BAJA EQ 4",
        connected: true,
        failure: false,
        irrigating: true,
      },
      geometry: {
        coordinates: [-70.9533952624408, -32.415900649599074],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        markerId: "beec17aa-78ed-11ee-b962-0242ac120002",
        deviceId: 3065,
        name: "LA VEGA BAJA EQ 5",
        connected: true,
        failure: false,
        irrigating: true,
      },
      geometry: {
        coordinates: [-70.93833800205948, -32.41534925638085],
        type: "Point",
      },
    },
  ],
};

export const unitsUKCrops: UnitProps = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        markerId: "8b5c67e7-4847-48f4-ae48-ab31fe0c9266",
        deviceId: 7010,
        name: "UK-Crops DV 1",
        connected: true,
        failure: false,
        irrigating: true
      },
      "geometry": {
        "coordinates": [
          -0.8974829344118689,
          50.880462311180736
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        markerId: "35494548-b27a-49b0-8e77-cc809e9ecfeb",
        deviceId: 7011,
        name: "UK-Crops DV 2",
        connected: true,
        failure: false,
        irrigating: true
      },
      "geometry": {
        "coordinates": [
          -0.8841268129282298,
          50.88459877655839
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        markerId: "daa1bf88-f46c-47fe-ae3f-ebd0dbb8998e",
        deviceId: 7012,
        name: "UK-Crops DV 3",
        connected: true,
        failure: false,
        irrigating: true
      },
      "geometry": {
        "coordinates": [
          -0.8678653729929522,
          50.881184256088346
        ],
        "type": "Point"
      }
    }
  ]
}