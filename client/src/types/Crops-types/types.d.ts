export type CropsType = {
  id: number;
  name: string;
  color: number[];
  created_at: string;
  updated_at: string;
};

export type ArrCropsType = [
  CropsType,
  CropsType,
  CropsType,
  CropsType,
  CropsType
];
