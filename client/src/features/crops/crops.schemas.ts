import { z } from "zod";

export const CropSchema = z.object({
  id: z.number(),
  name: z.string(),
  color: z.array(z.number()),
  created_at: z.iso.datetime(),
  updated_at: z.iso.datetime(),
});

export const CropListSchema = z.array(CropSchema);
export type CropDTO = z.infer<typeof CropListSchema>;
export type CropIdDTO = z.infer<typeof CropSchema>;
