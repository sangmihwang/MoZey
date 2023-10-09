import { create } from "zustand";
import { persist } from "zustand/middleware";

export const chartDataStore = create(
  persist(
    (set) => ({
      chartData: [],
      setChartData: (data) => set({ chartData: data }),
      clearChartData: () => set({ chartData: [] }),
    }),
    {
      name: "chartData",
      partialize: (state) => ({ chartData: state.chartData }),
    }
  )
);

export default chartDataStore;
