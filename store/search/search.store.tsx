import { create } from 'zustand';

export const useSearchStore = create((set, get) => ({
  searchResult: '',
  setSearchParam: (value: string) => set({ searchResult: value }),
}));
