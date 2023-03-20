import { create } from 'zustand';

export const useSearchStore = create((set, get) => ({
  searchString: '',
  // action: () => {
  //   const search = get().searchString;
  // },
}));
