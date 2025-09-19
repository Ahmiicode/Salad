// src/pages/Home.jsx
import { motion } from "framer-motion";
import saladImg from "../assets/banner1.png"; 
import "../index.css";

function Banner() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-tr from-[#aaffa9] via-[#11ffbd] to-[#07f9b6] px-4 sm:px-8 md:px-16 py-12 sm:py-16 md:py-25">
      
      {/* Left Side - Text */}
      <div className="w-full md:w-auto text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-extrabold text-black  leading-tight">
          <span className="block lg:text-7xl">Fresh Healthy</span>
          <span className="block lg:text-7xl font-normal">Delicious Salads</span>
        </h1>
        <p className="mt-8 text-base sm:text-lg md:text-lg lg:text-lg text-gray-700">
          Healthy foods to eat everyday, tasty and healthy vegetable <br /> salad with 
          fresh tomatoes, coriander leaves and more.
        </p>
        <button className="mt-9 px-12 py-4 bg-orange-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-500 transition">
          Order Now
        </button>
      </div>

      {/* Right Side - Animated Salad Image */}
      <motion.div
        className="w-full md:w-auto flex justify-center mb-6 md:mb-0"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <img
          src={saladImg}
          alt="Salad"
          className="w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 rounded-full shadow-xl object-cover border-4 border-green-200"
        />
      </motion.div>
    </section>
  );
}

export default Banner;
