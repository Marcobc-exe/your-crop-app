export type SectorType = {
  id: number,
  deviceId: number,
  name: string,
  area: number,
  crop: number,
  program: number,
  state: number,
  pumps: [number]
}

export type StateUnits = {
  deviceId: number,
  isOpen: boolean,
}

export type ArrStateUnits = [StateUnits[], (newFilter: StateUnits[]) => void];