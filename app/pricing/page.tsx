import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <section
        id="pricing"
        className="py-24 px-8 md:px-14 lg:px-24 bg-[#F7F2EA] text-[#1C1917]"
      >
        <div className="max-w-[1600px] mx-auto">

          {/* Heading */}
          <div className="max-w-4xl">

            <p className="text-[var(--vermillion)] font-semibold uppercase tracking-[0.25em]">
              Pricing
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mt-6 leading-tight">
              Learn visually.
              <br />
              Understand deeply.
            </h1>

            <p className="text-xl md:text-2xl text-neutral-700 mt-8 leading-relaxed">
              Start free and experience interactive learning.
              Upgrade anytime for unlimited visual generation,
              advanced experiences, and faster access.
            </p>

          </div>

          {/* Cards */}
          <div className="grid lg:grid-cols-2 gap-10 mt-24">

            {/* Free Plan */}
            <div className="bg-[var(--cream)] rounded-[40px] p-10 md:p-14 border border-black/5">

              <div className="flex items-center justify-between">

                <h2 className="text-4xl font-black">
                  Free
                </h2>

                <span className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold">
                  Starter
                </span>

              </div>

              <div className="mt-10 flex items-end gap-2">

                <span className="text-7xl font-black">
                  $0
                </span>

                <span className="text-xl text-neutral-500 mb-2">
                  forever
                </span>

              </div>

              <p className="mt-8 text-xl text-neutral-700 leading-relaxed max-w-lg">
                Perfect for students trying Prologue for the first time.
                Explore interactive visuals across every subject.
              </p>

              <div className="mt-12 space-y-5">

                <div className="flex items-center gap-4 text-lg">
                  <span>✓</span>
                  <p>10 free visual generations</p>
                </div>

                <div className="flex items-center gap-4 text-lg">
                  <span>✓</span>
                  <p>Interactive simulations</p>
                </div>

                <div className="flex items-center gap-4 text-lg">
                  <span>✓</span>
                  <p>AI explanations</p>
                </div>

                <div className="flex items-center gap-4 text-lg">
                  <span>✓</span>
                  <p>Access on mobile & web</p>
                </div>

              </div>

              <button className="w-full mt-14 bg-black text-white py-5 rounded-full text-lg font-semibold hover:scale-[1.02] transition">
                Start Free
              </button>

            </div>

            {/* Pro Plan */}
            <div className="bg-[var(--vermillion)] text-white rounded-[40px] p-10 md:p-14 relative overflow-hidden">

              <div className="absolute top-6 right-6 bg-white text-black px-5 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>

              <h2 className="text-4xl font-black">
                Pro
              </h2>

              <div className="mt-10 flex items-end gap-2">

                <span className="text-7xl font-black">
                  $9.99
                </span>

                <span className="text-xl text-white/70 mb-2">
                  /month
                </span>

              </div>

              <p className="mt-8 text-xl text-white/80 leading-relaxed max-w-lg">
                Unlimited interactive learning with faster generation,
                advanced simulations, and future premium features.
              </p>

              <div className="mt-12 space-y-5">

                <div className="flex items-center gap-4 text-lg">
                  <span>✓</span>
                  <p>Unlimited visual generations</p>
                </div>

                <div className="flex items-center gap-4 text-lg">
                  <span>✓</span>
                  <p>Advanced AI visual simulations</p>
                </div>

                <div className="flex items-center gap-4 text-lg">
                  <span>✓</span>
                  <p>Priority generation speed</p>
                </div>

                <div className="flex items-center gap-4 text-lg">
                  <span>✓</span>
                  <p>Future premium updates included</p>
                </div>

              </div>

              <button className="w-full mt-14 bg-white text-black py-5 rounded-full text-lg font-bold hover:scale-[1.02] transition">
                Upgrade to Pro
              </button>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}