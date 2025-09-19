import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const Number = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-orange-500 text-4xl mb-4" />,
      title: "Location",
      details: ["Dolor sit, #PTH,8800 Honey Street UK."],
    },
    {
      icon: <FaPhoneAlt className="text-orange-500 text-4xl mb-4" />,
      title: "Phone",
      details: ["+22 123 984 434", "+44 123 984 439"],
    },
    {
      icon: <FaEnvelope className="text-orange-500 text-4xl mb-4" />,
      title: "Email",
      details: ["mail@example.com", "mail@example1.com"],
    },
    {
      icon: <FaClock className="text-orange-500 text-4xl mb-4" />,
      title: "Working Hours",
      details: ["Wednesday - Sunday", "7:00 AM - 9:00 PM"],
    },
  ];

  return (
    <section className="w-full px-6 md:px-16 py-20 bg-gradient-to-tr from-[#fdfdfd] to-[#f5f5f5]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-2xl transition"
          >
            {/* Icon */}
            {item.icon}

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {item.title}
            </h3>

            {/* Details */}
            {item.details.map((detail, i) => (
              <p key={i} className="text-gray-600">
                {detail}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Number;
