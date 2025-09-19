import React from "react";
import { FaAppleAlt, FaLeaf, FaSeedling, FaCarrot, FaHeartbeat, FaWeight } from "react-icons/fa";

const Category = () => {
  const categories = [
    { title: "Healthy Food", icon: <FaAppleAlt />, desc: "Ras effic itur metusga via suscipit consectetur adipisicing unde omnis." },
    { title: "Fresh Salads", icon: <FaLeaf />, desc: "Ras effic itur metusga via suscipit consectetur adipisicing unde omnis." },
    { title: "Natural Fiber", icon: <FaSeedling />, desc: "Ras effic itur metusga via suscipit consectetur adipisicing unde omnis." },
    { title: "Nutritional Food", icon: <FaCarrot />, desc: "Ras effic itur metusga via suscipit consectetur adipisicing unde omnis." },
    { title: "Protect Your Heart", icon: <FaHeartbeat />, desc: "Ras effic itur metusga via suscipit consectetur adipisicing unde omnis." },
    { title: "Weight Control", icon: <FaWeight />, desc: "Ras effic itur metusga via suscipit consectetur adipisicing unde omnis." },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      
      {/* Row 1 - 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {categories.slice(0, 3).map((c) => (
          <article
            key={c.title}
            className="group p-5 rounded-xl bg-white border border-transparent hover:border-gray-200 transition"
          >
            <div className="flex items-start gap-4">
              <span className="text-orange-500 text-5xl group-hover:text-green-600 transition-colors">
                {c.icon}
              </span>
              <div>
                <h4 className="text-3xl  font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                  {c.title}
                </h4>
                <p className="mt-6 text-lg text-gray-600">{c.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Row 2 - 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.slice(3).map((c) => (
          <article
            key={c.title}
            className="group p-5 rounded-xl bg-white border border-transparent hover:border-gray-200 transition"
          >
            <div className="flex items-start gap-4">
              <span className="text-orange-500 text-5xl group-hover:text-green-600 transition-colors">
                {c.icon}
              </span>
              <div>
                <h4 className="text-3xl  font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                  {c.title}
                </h4>
                <p className="mt-6 text-lg text-gray-600">{c.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Category;
