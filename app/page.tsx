import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Features from "./components/Features";
import Comparison from "./components/Comparison";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[var(--paper)] text-[var(--ink)] overflow-hidden">

      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <Comparison />
      <Workflow />
      <Pricing />
      <Footer />

    </main>
  );
}