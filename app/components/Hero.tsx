"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8 md:px-14 lg:px-20 py-18">

      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-24 items-center">

        {/* TEXT */}
        <div>
          <p className="text-[var(--vermillion)] font-semibold mb-6 uppercase tracking-widest">
            Interactive Visual Learning
          </p>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight">
            Don't read it.
            <br />
            Touch it.
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-xl md:text-2xl text-neutral-700 mt-10 leading-relaxed max-w-2xl"
          >
            Prologue transforms difficult concepts into live interactive environments.
          </motion.p>

          <div className="flex flex-wrap gap-5 mt-12">
            <button className="bg-[var(--vermillion)] text-white px-8 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl">
  Start Learning
</button>

            <button className="border border-black/10 bg-white px-8 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl">
              Watch Demo
            </button>
          </div>
        </div>

        {/* IMAGE (FIXED ANIMATION) */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0], // floating effect
            scale: 1,
          }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut" },
            scale: { duration: 0.8, ease: "easeOut" },
            y: {
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <div className="bg-[var(--cream)] p-6 rounded-[40px] shadow-2xl">
            <img
              src="/hero.jpg"
              alt="Prologue Demo"
              className="rounded-[30px] w-full"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}