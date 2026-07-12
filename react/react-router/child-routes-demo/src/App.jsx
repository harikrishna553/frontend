import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Dashboard,
  Memorymetrics,
  CpuMetrics,
  NetworkStats,
} from "./pages/Dashboard";

// Define routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "memory-metrics",
        element: <Memorymetrics />,
      },
      {
        path: "cpu-metrics",
        element: <CpuMetrics />,
      },
      {
        path: "network-stats",
        element: <NetworkStats />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
