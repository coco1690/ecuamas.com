import { create } from 'zustand';

interface AppState {
  showSplash: boolean;
  setShowSplash: (show: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  showSplash: true,
  setShowSplash: (show) => set({ showSplash: show }),
}));