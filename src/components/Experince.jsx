// src/components/Experience.jsx
import React from "react";
import Img1 from "../assets/ab1.jpg"; // Replace with your image path
import Img2 from "../assets/ab2.jpg"; 
import img3 from "../assets/sign.png"// Replace with your image path

function Experience() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
      {/* Left Side: Images */}
      <div className="md:w-1/2 w-full flex justify-center relative ">
        {/* Left Image - pushed down */}
        <img
          src={Img1}
          alt="Experience Left"
          className="w-1/2 rounded-lg shadow-lg -translate-y-10"
        />
        {/* Right Image - pulled up */}
        <img
          src={Img2}
          alt="Experience Right"
          className="w-1/2 rounded-lg shadow-lg  border-6 border-white translate-y-10 -translate-x-10"
        />
      </div>

      {/* Right Side: Text */}
<div className="md:w-1/2 w-full flex flex-col justify-center">
  <h4 className="text-black text-4xl font-sm mb-9">
    Since 2000
  </h4>
  <h2 className="text-3xl md:text-5xl font-bold mb-6">
    We Have <span className="text-orange-400">30+</span> Years of Experience
  </h2>
  <p className="text-gray-700 mb-4">
    "Orem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in
    ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Non quae, fugiat".
  </p>
  <p className="text-gray-600 dark:text-gray-400 mb-6">
    Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Non quae, fugiat. Lorem ipsum viverra feugiat. Pellen tesque libero
    ut justo, ultrices in ligula.
  </p>

  {/* Signature Image */}
  <img
    src={img3}// 👈 Replace with your actual path
    alt="Signature"
    className="w-20 md:w-30 object-contain"
  />
</div>

    </section>
  );
}

export default Experience;
