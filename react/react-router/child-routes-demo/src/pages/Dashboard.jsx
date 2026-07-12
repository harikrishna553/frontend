import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      {/* The Outlet component will render the child routes here */}
      <Outlet />
    </div>
  );
};

export function Memorymetrics() {
  return (
    <>
      <h3>Memory Metrics</h3>
    </>
  );
}

export function CpuMetrics() {
  return (
    <>
      <h3>CPU Metrics</h3>
    </>
  );
}

export function NetworkStats() {
  return (
    <>
      <h3>Network Statistics</h3>
    </>
  );
}

export default Dashboard;
