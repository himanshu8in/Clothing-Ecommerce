"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const params = useParams();

  useEffect(() => {
    async function getProduct() {
      try {
        setLoading(true);
        const res = await fetch(`/api/products?id=${params.id}`);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch product: ${res.status}`);
        }
        
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      getProduct();
    }
  }, [params.id]);

  if (loading) {
    return <h2 className="text-center py-20">Loading...</h2>;
  }

  if (error || !product) {
    return <h2 className="text-center py-20">Product not found</h2>;
  }

  return (
    <section className="max-w-5xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Image */}
      <div className="bg-gray-100 rounded-xl p-6">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="object-cover rounded-xl"
        />
      </div>

      {/* Details */}
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>

        <p className="text-2xl font-semibold mb-6">
          ₹{product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-xl cursor-pointer hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}
