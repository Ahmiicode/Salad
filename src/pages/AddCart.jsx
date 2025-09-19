import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const AddCart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p>No items in your cart yet.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item._id || item.name}
              className="flex flex-col md:flex-row items-center md:items-center justify-between p-4 bg-white shadow rounded-lg gap-4"
            >
              {/* Item Image + Info */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <img
                  src={`http://localhost:5000/images/${item.image}`}
                  alt={item.name}
                  className="w-20 h-20 rounded object-cover"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    updateQuantity(item.name, Math.max(1, item.quantity - 1))
                  }
                  className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.name, item.quantity + 1)}
                  className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.name)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-orange-600 w-full md:w-auto"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="text-right font-bold text-xl mt-6">
            Total: ${totalPrice.toFixed(2)}
          </div>

          {/* Checkout */}
          <div className="mt-4">
            <button
              onClick={() => navigate("/checkout")}
              className="mt-6 w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCart;
