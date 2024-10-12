import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./components/Search";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a QueryClient instance
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Search />
    </QueryClientProvider>
  </StrictMode>
);
