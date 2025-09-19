import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SpeacialMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/food/list");
        setMenuItems(res.data.data || []);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="w-full px-6 md:px-16 py-20 bg-white">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Our <span className="text-orange-400">Special Menu</span>
      </h2>

      <div className="grid grid-cols-1 gap-8">
        {menuItems.length > 0 ? (
          menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 hover:shadow-2xl transition"
            >
              {/* Image */}
              <img
                src={`http://localhost:5000/images/${item.image}`}
                alt={item.name}
                className="w-28 h-28 object-cover rounded-full border-4 border-orange-400 shadow-md"
              />

              {/* Text Section */}
              <div className="flex-1 text-center md:text-left px-2">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>

              {/* Price + Button */}
              <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-center md:text-right">
                <p className="text-orange-500 font-bold text-lg mb-3 md:mb-0">
                  ${item.price}
                </p>
                <Link
                  to={`/product/${encodeURIComponent(item.name)}`}
                  className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-green-500 transition"
                >
                  Order Now
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products available.</p>
        )}
      </div>
    </section>
  );
};

export default SpeacialMenu;
