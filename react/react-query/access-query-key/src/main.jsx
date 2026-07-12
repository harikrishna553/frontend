import { StrictMode } from "react";
import UserSearch from "./components/UserSearch";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import "./styles.css";

// Create a QueryClient instance
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserSearch />
    </QueryClientProvider>
  </StrictMode>
);
