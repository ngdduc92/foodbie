import create from 'zustand';

export const useProductStore = create((set) => ({
  products: [],
  carts: [],
  addProductToCart: (product: any) => set((state: any) => ({ carts: [...state.carts, product] })),
  removeProductToCart: () => set((state: any) => (state.carts = [])),
}));
