import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: true // good defaults for many apps
    },
  },
});

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} /> {/* optional */}
    </QueryClientProvider>
  </React.StrictMode>
);
