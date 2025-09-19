// src/components/Restaurants.jsx
import React from "react";
import restaurantImg from "../assets/img2.png"; // replace with your image

function Cheaf() {
  return (
    <section className="w-full px-6 md:px-16 py-20 flex flex-col-reverse md:flex-row bg-white items-center">
      
      {/* Left Side - Text Content (70%) */}
      <div className="w-full md:w-[60%] flex flex-col justify-center text-center md:text-left mt-8 md:mt-0 md:pr-10">
        <h2 className="text-2xl md:text-5xl font-bold mb-6">
         Meet Our Best  <span className="text-orange-400">Chef's</span>
        </h2>
     
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
  

        <button className="px-12 py-4 bg-orange-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-500 transition self-center md:self-start">
          See our Chef's
        </button>
      </div>

      {/* Right Side - Image (30%) */}
      <div className="w-full  md:w-[40%]  flex justify-center md:justify-end">
        <img
          src={restaurantImg}
          alt="Restaurant"
          className="w-72 md:w-80 lg:w-106 h-auto rounded-xl object-cover"
        />
      </div>

    </section>
  );
}

export default Cheaf;
