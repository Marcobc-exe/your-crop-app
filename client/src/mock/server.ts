import { createServer, Model } from "miragejs";

export function mockServer({ environment = "development" } = {}) {
  return createServer({
    environment,
    models: {
      map: Model,
    },
    
    // Optional: seeds to populate initial data with maps
    seeds(server) {
      server.create("map", {
        id: "b37fa27e-6ee8-11ee-b962-0242ac120002",
        name: "LA VEGA BAJA",
        center: "-32.420329; -70.952348\n",
        zoom: 14,
      });
      server.create("map", {
        id: "b37fa27e-6ee8-11ee-b962-0242ac879900",
        name: "UK Crops",
        center: "50.88140288226225; -0.8869657843947891\n",
        zoom: 13,
      });
    },

    // Define API routes
    routes() {
      this.namespace = "api"; 

      this.get("/maps", (schema) => {
        return schema.all("map");
      });
    },
  });
}
