import ax from "axios";

const BASE_PATH: string = "/api"
// const BASE_PATH = "/data"

export const axios = ax.create({
  baseURL: BASE_PATH,
});

