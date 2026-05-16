"use client";

import { motion } from "framer-motion";

const features = [
  { title: "Live Physics", image: "/1.png" },
  { title: "Interactive Math", image: "/2.png" },
  { title: "Visual Chemistry", image: "/3.png" },
  { title: "AI Explanations", image: "/4.png" },
  { title: "Predict & Check", image: "/5.png" },
  { title: "Touch Learning", image: "/6.png" },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-8 md:px-14 lg:px-24">

      <div className="max-w-[1800px] mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="text-[var(--vermillion)] font-semibold uppercase tracking-widest">
            Features
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-8">
            Simple, but powerful
          </h2>

          <p className="text-2xl text-neutral-700 mt-6 max-w-3xl">
            Interactive visuals generated instantly for any concept across every subject.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 mt-24">

          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.03 }}
              className="bg-[var(--cream)] rounded-[32px] p-4"
            >

              <img
                src={item.image}
                className="rounded-[24px] w-full"
                alt={item.title}
              />

              <h3 className="text-3xl font-bold mt-8">
                {item.title}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}