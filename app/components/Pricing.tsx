export default function Pricing() {
  return (
    <section id="pricing" className="py-15 px-8 md:px-14 lg:px-24">

      <div className="max-w-[1000px] mx-auto text-center">

        <p className="text-[var(--vermillion)] font-semibold uppercase tracking-widest">
          Pricing
        </p>

        <h2 className="text-5xl md:text-5xl lg:text-6xl font-black mt-8">
          Simple pricing
        </h2>

        <p className="text-2xl text-neutral-700 mt-8">
          Learn visually. Understand deeply.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-24">

          <div className="bg-[var(--cream)] rounded-[40px] p-12 text-left">

            <h3 className="text-4xl font-black">
              Free
            </h3>

            <p className="text-7xl font-black mt-8">
              $0
            </p>

            <p className="mt-8 text-xl text-neutral-700 leading-relaxed">
              10 free visual generations.
              Perfect for trying the platform.
            </p>

            <button className="w-full mt-12 bg-black text-white py-5 rounded-full text-lg font-semibold">
              Start Free
            </button>

          </div>

          <div className="bg-[var(--vermillion)] text-white rounded-[40px] p-12 text-left">

            <h3 className="text-4xl font-black">
              Pro
            </h3>

            <p className="text-7xl font-black mt-8">
              $9.99
            </p>

            <p className="mt-8 text-xl text-white/80 leading-relaxed">
              Unlimited interactive learning and advanced visuals.
            </p>

            <button className="w-full mt-12 bg-white text-black py-5 rounded-full text-lg font-semibold">
              Go Pro
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}