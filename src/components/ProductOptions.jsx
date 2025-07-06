'use client';

import { useState } from 'react';
import { useCartStore } from '../app/utils/cartStore'; // Ajusta ruta

export default function ProductOptions({ product }) {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) return;

    addToCart({
      productId: product._id || product.slug?.current || product.title,
      title: product.title,
      color: selectedColor,
      size: selectedSize,
      quantity: 1,
      price: product.price, // Asegúrate que es price no prize
    });

    alert('Producto añadido al carrito');
  };

  return (
    <div>
      {/* Colores */}
      <div className="flex gap-3">
        {product.colors?.map((color, idx) => (
          <button
            key={color || idx}
            onClick={() => setSelectedColor(color)}
            className={`w-10 h-10 rounded-full border-2 ${
              selectedColor === color ? 'ring-2 ring-black border-black' : 'border-gray-300'
            }`}
            style={{ backgroundColor: color }}
            title={color}
          >
            {selectedColor === color && (
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        ))}
      </div>

      {/* Tallas */}
      <div className="flex gap-3">
        {product.sizes?.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`w-12 h-12 rounded-full border ${
              selectedSize === size
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-gray-300'
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Añadir al carrito */}
      <button
        disabled={!selectedColor || !selectedSize}
        onClick={handleAddToCart}
        className={`mt-6 px-6 py-2 rounded text-white font-semibold ${
          selectedColor && selectedSize
            ? 'bg-black hover:bg-gray-800'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Añadir al carrito
      </button>
    </div>
  );
}
