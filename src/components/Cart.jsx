'use client';

import { useCartStore } from '../app/utils/cartStore'; // ajusta ruta según tu estructura

export default function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <p className="p-4">Tu carrito está vacío.</p>;
  }

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold">Carrito</h2>

      <ul className="space-y-4">
        {cartItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b pb-4"
          >
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm">Talla: {item.size}</p>
              <p className="text-sm">Color: {item.color}</p>
              <p className="text-sm">Cantidad: {item.quantity}</p>
              <p className="text-sm">Precio: {item.price}€</p>
            </div>
            <button
              onClick={() => removeFromCart(item)}
              className="text-red-600 hover:underline"
            >
              Quitar
            </button>
          </li>
        ))}
      </ul>

      <div className="font-bold text-lg">
        Total: {totalPrice.toFixed(2)}€
      </div>

      <button
        onClick={clearCart}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Vaciar carrito
      </button>
    </div>
  );
}

