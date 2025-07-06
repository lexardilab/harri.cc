// src/store/cartStore.js
import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => {
      const exists = state.cartItems.find(
        (i) =>
          i.productId === item.productId &&
          i.color === item.color &&
          i.size === item.size
      );
      if (exists) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.productId === item.productId &&
            i.color === item.color &&
            i.size === item.size
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };
    }),
  removeFromCart: (item) =>
    set((state) => ({
      cartItems: state.cartItems.filter((i) => i !== item),
    })),
  clearCart: () => set({ cartItems: [] }),
}));
