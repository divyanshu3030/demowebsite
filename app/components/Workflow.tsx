"use client";

import { motion } from "framer-motion";

const steps = [
  "Student types a concept",
  "AI classifies the request",
  "Interactive visual is generated",
  "Student manipulates the concept",
  "Understanding clicks",
];

export default function Workflow() {
  return (
    <section className="py-24 px-8 md:px-14 lg:px-24">

      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="text-[var(--vermillion)] font-semibold uppercase tracking-widest text-center">
            Workflow
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-center mt-8">
            How it works
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="mt-24 space-y-8">

          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-8 bg-[var(--cream)] rounded-[32px] p-10 shadow-sm"
            >

              <div className="w-16 h-16 rounded-full bg-[var(--vermillion)] text-white flex items-center justify-center text-2xl font-bold shrink-0">
                {index + 1}
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold">
                {step}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}