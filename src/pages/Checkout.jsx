import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import axios from "axios";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return alert("Your cart is empty");

    const orderData = {
      customer: form,
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    };

    try {
      await axios.post("http://localhost:5000/api/orders", orderData);
      alert("✅ Order placed successfully!");
      clearCart();
    } catch (err) {
      console.error("Error placing order:", err);
      alert("❌ Failed to place order");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Cart Summary */}
      <div className="mb-6">
        {cart.map((item, index) => (
          <p key={index}>
            {item.name} ({item.quantity} × ${item.price})
          </p>
        ))}
        <h2 className="font-bold mt-2">
          Total: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
        </h2>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
