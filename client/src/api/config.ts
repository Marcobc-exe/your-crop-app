import ax from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const MAPS_API_URL = `${API_BASE_URL}/maps`;
export const DEVICES_API_URL = `${API_BASE_URL}/devices`;
export const CROPS_API_URL = `${API_BASE_URL}/crops`;

export const api = ax.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});
