"use client";

import { createContext, useContext } from "react";

const SalesDataContext = createContext<any>(null);

export function SalesDataProvider({ children, salesData }: { children: React.ReactNode; salesData: any }) {
  return <SalesDataContext.Provider value={salesData}>{children}</SalesDataContext.Provider>;
}

export function useSalesData() {
  return useContext(SalesDataContext);
}
