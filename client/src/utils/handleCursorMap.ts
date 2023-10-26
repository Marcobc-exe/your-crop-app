import { CursorType } from "../types/Map-types/types";

export const handleCursorMap = (event: CursorType): string => {
  if (event.isHovering) return "pointer";
  if (event.isDragging) return "grabbing";
  if (!event.isHovering) return "grab";
  if (!event.isDragging) return "grab";
  return "grab";
};
