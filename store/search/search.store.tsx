import { create } from 'zustand';

export const useSearchStore = create((set) => ({
  searchString: '',
}));
