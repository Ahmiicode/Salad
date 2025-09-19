// src/components/Restaurants.jsx
import React from "react";
import restaurantImg from "../assets/ab2.jpg"; // replace with your image

function Resturent() {
  return (
    <section className="w-full px-6 md:px-16 py-20 flex flex-col-reverse md:flex-row bg-gradient-to-tr from-[#aaffa9] via-[#11ffbd] to-[#07f9b6] items-center">
      
      {/* Left Side - Text Content (70%) */}
      <div className="w-full md:w-[70%] flex flex-col justify-center text-center md:text-left mt-8 md:mt-0 md:pr-10">
        <h2 className="text-3xl md:text-6xl font-bold mb-6">
          Our Restaurants <span className="text-orange-400">Menu</span>
        </h2>
        <div className="flex gap-8">
        <p className="text-gray-700  mb-4 text-lg leading-relaxed">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
        <p className="text-gray-700  mb-6 text-lg leading-relaxed">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>

        <button className="px-12 py-4 bg-orange-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-500 transition self-center md:self-start">
          What's On the Menu
        </button>
      </div>

      {/* Right Side - Image (30%) */}
      <div className="w-full  md:w-[30%]  flex justify-center md:justify-end">
        <img
          src={restaurantImg}
          alt="Restaurant"
          className="w-72 md:w-80 lg:w-96 h-auto rounded-xl shadow-xl object-cover"
        />
      </div>

    </section>
  );
}

export default Resturent;
