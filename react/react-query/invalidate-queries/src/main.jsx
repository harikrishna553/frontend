import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UserInfo from "./components/UserInfo";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a QueryClient instance
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserInfo />
    </QueryClientProvider>
  </StrictMode>
);
