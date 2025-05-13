import { createContext, useContext } from "react";

interface DashboardUIContextProps {
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (v: boolean) => void;
  platformBarCollapsed: boolean;
  setPlatformBarCollapsed: (v: boolean) => void;
}

export const DashboardUIContext = createContext<
  DashboardUIContextProps | undefined
>(undefined);

export const useDashboardUI = () => {
  const ctx = useContext(DashboardUIContext);
  if (!ctx)
    throw new Error(
      "useDashboardUI must be used within DashboardUIContext.Provider"
    );
  return ctx;
};
