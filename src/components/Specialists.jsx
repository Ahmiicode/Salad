// src/components/Specialists.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; 

// Import team images
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";

function Specialists() {
  const specialists = [
    { name: "John Doe", role: "Owner", img: team1 },
    { name: "Alexander", role: "Chef", img: team2 },
    { name: "Martin Ker", role: "Co-founder", img: team3 },
    { name: "Elizabeth", role: "Specialist", img: team4 },
  ];

  return (
    <section className="w-full px-6 md:px-16 py-20 bg-gradient-to-tr from-[#fdfbfb] to-[#ebedee]">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Our <span className="text-orange-400">Specialists</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {specialists.map((person, index) => (
          <div
            key={index}
            className="  p-6 flex flex-col items-center  transition"
          >
            {/* Image */}
            <img
              src={person.img}
              alt={person.name}
              className="w-82 rounded-lg h-92 object-cover  mb-4 "
            />

            {/* Name & Role */}
            <h3 className="text-2xl hover:text-green-600 font-semibold">{person.name}</h3>
            <p className="text-black">{person.role}</p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-xl text-black">
              <a href="#" className="hover:text-green-600">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-green-600">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-green-600">
                <FaInstagram />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specialists;
