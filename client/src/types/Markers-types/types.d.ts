export type DataMarkers = {
  features: Array,
  type: string
}

export type MarkersProps = {
  geometry: {
    coordinates: [ string, string ],
    type: string
  },
  properties: {
    markerId: string,
    deviceId: number,
    name: string,
    connected: boolean,
    failure: boolean,
    irrigating: boolean,
  }
}