import create from 'zustand';

export const useProductStore = create((set) => ({
  products: [],
  carts: [],
  addProductToCart: (product) => set((state) => ({ carts: [...state.carts, product] })),
  removeProductToCart: () => set((state) => (state.carts = [])),
}));
