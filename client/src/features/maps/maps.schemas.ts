import { z } from "zod";

export const MapSchema = z.object({
  id: z.number(),
  name: z.string(),
  center: z.string(),
  zoom: z.number(),
  created_at: z.iso.datetime(),
  updated_at: z.iso.datetime(),
});

export const MapSchemaTransform = MapSchema.transform((dto) => {
  const [latStr, lngStr] = dto.center.split(";");
  const lat = Number(latStr);
  const lng = Number(lngStr);
  return {
    id: dto.id,
    name: dto.name,
    center: { lat, lng },   // nicer for the UI
    zoom: dto.zoom,
    createdAt: new Date(dto.created_at),
    updatedAt: new Date(dto.updated_at),
  };
});

export const MapListSchema = z.array(MapSchemaTransform);
export type MapDTO = z.infer<typeof MapListSchema>;
export type MapIdDTO = z.infer<typeof MapSchemaTransform>
