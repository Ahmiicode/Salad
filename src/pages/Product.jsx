import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";

const Product = () => {
  const { name } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/food/list");
        const allProducts = res.data.data || [];

        const found = allProducts.find(
          (item) =>
            item.name.toLowerCase() === decodeURIComponent(name).toLowerCase()
        );

        setProduct(found || null);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [name]);

  if (!product) return <p className="p-6">Product not found or loading...</p>;

  const handleAddToCart = () => {
    const cartItem = { ...product, quantity };
    addToCart(cartItem);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg">
      <img
        src={`http://localhost:5000/images/${product.image}`}
        alt={product.name}
        className="w-64 h-64 object-cover mx-auto rounded-lg mb-6"
      />

      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-lg font-semibold text-orange-500 mb-4">
        ${product.price}
      </p>

      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          -
        </button>
        <span className="text-xl">{quantity}</span>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          +
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-green-500 transition"
      >
        Add to Cart (${product.price * quantity})
      </button>
    </div>
  );
};

export default Product;
