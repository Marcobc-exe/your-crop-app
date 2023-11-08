export type SectorType = {
  map(arg0: (sector: SectorType) => import("react/jsx-runtime").JSX.Element): unknown;
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