// src/components/Restaurants.jsx
import React from "react";
import restaurantImg from "../assets/about.jpg"; // replace with your image

function Aboutmenu() {
  return (
    <section className="w-full px-6 md:px-16 py-20 flex flex-col md:flex-row bg-gradient-to-tr from-[#aaffa9] via-[#11ffbd] to-[#07f9b6] items-center">
      
      {/* Left Side - Image */}
      <div className="w-full md:w-[50%] flex justify-center md:justify-start mb-8 md:mb-0">
        <img
          src={restaurantImg}
          alt="Restaurant"
          className="w-72 md:w-80 lg:w-106 h-auto rounded-xl shadow-xl object-cover"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-[50%] flex flex-col justify-center text-center md:text-left md:pl-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Populars <span className="text-orange-400">In</span>
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
          Sed ut perspiciatis unde omnis iste natus error sit accusantium doloremque, 
          eaque ipsa quae ab illo inventore.
        </p>

        {/* Menu List */}
        <div className="space-y-4 text-2xl font-bold">
          <div className="flex justify-between  border-b pb-2 pt-8 border-gray-400">
            <span>Green salad</span>
            <span>$19.50</span>
          </div>
          <div className="flex justify-between border-b pb-2 pt-8 border-gray-400">
            <span>Fruit salads</span>
            <span>$40.50</span>
          </div>
          <div className="flex justify-between border-b pb-2 pt-8 border-gray-400">
            <span>Dessert salads</span>
            <span>$36.50</span>
          </div>
        </div>

        {/* Button */}
        <button className="mt-8 px-10 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-500 transition self-center md:self-start">
          View More
        </button>
      </div>
    </section>
  );
}

export default Aboutmenu;
