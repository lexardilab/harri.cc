"use client";

import { useState } from "react";
import { useCartStore } from "../app/utils/cartStore"; // Ajusta ruta

export default function ProductOptions({ product }) {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
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

    alert("Producto añadido al carrito");
  };

  return (
    <div className="flex items-center">
      {/* Colores */}
      <div className="flex gap-3 pr-12">
        {product.colors?.map((color, idx) => (
          <button
            key={color || idx}
            onClick={() => setSelectedColor(color)}
            className={`w-10 h-10 rounded-full border ${
              selectedColor === color
                ? "ring-2 ring-black border-black"
                : "border-gray-300"
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
              ></svg>
            )}
          </button>
        ))}
      </div>

      {/* Tallas */}
      <div className="flex pr-12 gap-3">
        {product.sizes?.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`w-10 h-10 rounded-full border ${
              selectedSize === size
                ? "ring-2 ring-black border-black"
                : "border-gray-300"
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
        className={` py-2  ${
          selectedColor && selectedSize
            ? " text-xl font-bold leading-tight"
            : "text-xl font-bold leading-tight"
        }`}
      >
        Añadir al carrito
      </button>
    </div>
  );
}
