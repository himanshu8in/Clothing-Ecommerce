"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-xl p-4 shadow">
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={400}
        className="h-48 w-full object-cover rounded-lg"
      />

      <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">
        <span className="inline-block bg-gradient-to-r from-slate-900 via-indigo-600 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
          {product.name}
        </span>
      </h3>
      <p className="text-gray-600">₹{product.price}</p>

      <div className="flex gap-2 mt-3">
        <Link
          href={`/product/${product.id}`}
          className="flex-1 text-center bg-black text-white py-2 rounded-lg"
        >
          View
        </Link>

        <button
          onClick={() => addToCart(product)}
          className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 rounded-lg cursor-pointer hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
