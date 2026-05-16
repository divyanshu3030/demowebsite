"use client";

import { motion } from "framer-motion";

const data = [
  {
    name: "ChatGPT / Gemini",
    desc: "Text answers and explanations",
    edge: "Prologue turns concepts into interactive visuals students can explore",
  },
  {
    name: "Khan Academy",
    desc: "Videos and practice exercises",
    edge: "Prologue is hands-on learning, not passive watching",
  },
  {
    name: "Brilliant",
    desc: "Structured guided courses",
    edge: "Prologue generates custom visuals instantly for any concept",
  },
  {
    name: "PhET Simulations",
    desc: "Finite pre-built simulations",
    edge: "Prologue creates unlimited AI-powered simulations on demand",
  },
];

export default function Comparison() {
  return (
    <section className="py-20 px-8 md:px-14 lg:px-24">

      <div className="max-w-[1600px] mx-auto">

        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="text-[var(--vermillion)] font-semibold uppercase tracking-widest">
            Why Prologue
          </p>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mt-6 leading-tight">
            Built for understanding,
            <br />
            not memorization
          </h2>

          <p className="text-xl text-neutral-700 mt-8 max-w-3xl leading-relaxed">
            Most platforms either explain concepts or solve problems.
            Prologue creates interactive environments where students
            learn by touching, exploring, and experimenting themselves.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 space-y-6">

          {data.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="grid md:grid-cols-3 gap-8 bg-[var(--cream)] rounded-[32px] p-10 border border-black/5"
            >

              <div>
                <h3 className="text-2xl md:text-3xl font-black leading-tight">
                  {item.name}
                </h3>
              </div>

              <div>
                <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div>
                <p className="text-lg md:text-xl font-semibold text-[var(--vermillion)] leading-relaxed">
                  {item.edge}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}