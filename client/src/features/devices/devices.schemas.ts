import {z} from "zod";

export const DeviceSchema = z.object({
  id: z.number(),
  map_id: z.number(),
  name: z.string(),
  device_num: z.number(),
  lon: z.number(),
  lat: z.number(),
  connected: z.boolean(),
  failure: z.boolean(),
  irrigating: z.boolean(),
  created_at: z.iso.datetime(),
  updated_at: z.iso.datetime(),
});

export const DeviceSchemaTransform = DeviceSchema.transform((dto) => {
  return {
    geometry: {
      coordinates: [dto.lon.toString(), dto.lat.toString()],
      type: "Point"
    },
    properties: {
      id: dto.id,
      mapId: dto.map_id,
      deviceNum: dto.device_num,
      name: dto.name,
      connected: dto.connected,
      failure: dto.failure,
      irrigating: dto.irrigating,
      createdAt: new Date(dto.created_at),
      updatedAt: new Date(dto.updated_at),
    }
  }
});

export const DeviceListSchema = z.array(DeviceSchemaTransform);
export type DeviceDTO = z.infer<typeof DeviceListSchema>;
export type DeviceIdDTO = z.infer<typeof DeviceSchemaTransform>;