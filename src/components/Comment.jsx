import React, { useEffect, useState } from "react";

const comments = [
  {
    id: 1,
    name: "Johnson William",
    text: "Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in faucibus orci luctus et ultrices posuere, tesque libero ut justo Semper.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    quote: "Lorem ipsum dolor sit amet",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Johnson William",
    text: "Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in faucibus orci luctus et ultrices posuere, tesque libero ut justo Semper.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    quote: "Pellen tesque libero ut justo",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Alex Brown",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    quote: "Duis aute irure dolor",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Maria Garcia",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat..",
    quote: "Excepteur sint occaecat",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
];

export default function Comment({ delay = 3000 }) {
  const len = comments.length;
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % len);
    }, delay);
    return () => clearInterval(t);
  }, [isPaused, delay, len]);

  const visible = [comments[index], comments[(index + 1) % len]];

  return (
    <div className="">
      <div
        className="bg-gradient-to-r from-green-400 to-teal-400 p-10 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Cards row */}
        <div className="flex gap-6">
          {visible.map((c) => (
            <article
              key={`${c.id}-${index}`}
              className="w-1/2  p-6  flex flex-col  animate-slide-in"
              aria-label={`Comment by ${c.name}`}
            >
              <h3 className="text-black font-bold text-2xl mb-2">“{c.quote}”</h3>
              <p className="text-gray-600 text-md mt-12 mb-4">{c.text}</p>
             
              <span className="font-bold text-xl">{c.name}</span>
              <div className="flex mt-2" aria-hidden>
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} filled={k < c.rating} />
                ))}
              </div>
               <img
                src={c.image}
                alt={c.name}
                className="w-22 h-22 rounded-full mt-12 object-cover shadow mb-2"
              />
            </article>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-6 gap-2">
          {comments.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-gray-200" : "bg-orange-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Animation + Responsive tweaks */}
      <style>{`
        .animate-slide-in {
          animation: slide-in 520ms cubic-bezier(.22,.9,.25,1);
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .animate-slide-in { animation: none; }
          .w-1\\/2 { width: 100%; }
          .flex.gap-6 { flex-direction: column; }
        }
      `}</style>
    </div>
  );
}

function Star({ filled }) {
  return (
    <svg
      className="w-5 h-5 mr-1 text-orange-600"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden
    >
      <path
        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.402 8.172L12 18.897l-7.336 3.868 1.402-8.172L.132 9.21l8.2-1.192z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
