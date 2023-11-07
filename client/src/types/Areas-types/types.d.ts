export type DataAreas = {
  features: Array,
  type: string,
}

export type AreasProps = {
  geometry: object,
  properties: {
    id: string,
    idMap: string,
    device: number,
    deviceName: string,
    irrigating: boolean,
    sector: number,
    crop: number,
    failure: boolean
  },
  type: string
}