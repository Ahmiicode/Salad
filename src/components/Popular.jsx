// src/components/PopularSalads.jsx
import React from "react";
import GreenSaladImg from "../assets/s1.jpg"; // replace with actual image
import FruitSaladImg from "../assets/s2.jpg"; // replace with actual image
import DessertSaladImg from "../assets/s3.jpg"; // replace with actual image

function PopularSaladBox({ image, title, description }) {
  return (
    <div className="relative bg-white  p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">

  {/* Upper-left circle (partially outside the box) */}
  <div className="absolute -top-5 -left-1 w-36 h-36 bg-green-300 rounded-r-full rounded-b-full transition hover:bg-orange-400"></div>


 <div className="absolute bottom-0 right-0 w-0 h-0
                border-l-[90px] border-l-transparent
                border-b-[90px] border-b-orange-400 "></div>



  {/* Round image overlapping the circle */}
  <div className="flex   mb-4 relative z-10">
    <img
      src={image}
      alt={title}
      className="w-40 h-40  rounded-full object-cover border-8 border-white shadow-lg"
    />
  </div>
      {/* Title */}
      <h3 className="text-2xl font-semibold mt-8  mb-8">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-12   ">{description}</p>
    </div>
  );
}

function Popular() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 ">
      <h2 className="text-3xl  text-center md:text-6xl font-medium mb-16">
        Our <span className="text-orange-400">Popular</span> Salads
      </h2>

      <div className="grid gap-10 md:grid-cols-3">
        <PopularSaladBox
          image={GreenSaladImg}
          title="Green Salad"
          description="Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet."
        />
        <PopularSaladBox
          image={FruitSaladImg}
          title="Fruit Salad"
          description="Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed dolor et amet."
        />
        <PopularSaladBox
          image={DessertSaladImg}
          title="Dessert Salad"
          description="Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed dolor et amet."
        />
      </div>
    </section>
  );
}

export default Popular;
