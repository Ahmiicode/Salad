// src/components/EmailSubscribe.jsx
import React, { useState } from "react";

export default function Email() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email.");
    // TODO: Replace with API call
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
     <section className="w-full bg-white py-16 px-6 flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-snug">
        Subscribe to get email updates <br /> of our latest news
      </h2>

      <div className="max-w-2xl w-full">
        <form
          onSubmit={handleSubmit}
          className="flex items-center border-2 border-gray-300 rounded-4xl overflow-hidden  bg-white"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-5 outline-none text-gray-700"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-8 py-5 font-medium hover:bg-orange-600 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
