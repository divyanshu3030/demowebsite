import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[#F7F2EA] text-[#1C1917]">

      <Navbar />

      <section className="px-8 md:px-14 lg:px-24 py-24">

        <div className="max-w-[1200px] mx-auto">

          <p className="text-[#C0392B] uppercase tracking-[0.3em] font-semibold">
            About
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mt-8">
            Building a better way
            <br />
            to understand concepts.
          </h1>

          <p className="text-2xl text-neutral-700 leading-relaxed mt-10 max-w-4xl">
            Prologue is an interactive learning platform that helps
            students understand difficult ideas through visuals,
            motion, and interaction instead of passive reading.
          </p>

        </div>

      </section>

      <section className="px-8 md:px-14 lg:px-24 pb-24">

        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12">

          <div className="bg-[#EFE8DC] rounded-[32px] p-10">

            <h2 className="text-3xl font-black">
              What is Prologue?
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mt-6">
              Students type any concept they struggle with and
              Prologue generates a live interactive visual they can
              touch, drag, and explore in real time.
            </p>

          </div>

          <div className="bg-[#EFE8DC] rounded-[32px] p-10">

            <h2 className="text-3xl font-black">
              Why does it exist?
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mt-6">
              Most students don’t struggle because they are lazy.
              They struggle because concepts are usually explained
              with static text and passive videos instead of interaction.
            </p>

          </div>

          <div className="bg-[#EFE8DC] rounded-[32px] p-10">

            <h2 className="text-3xl font-black">
              Our vision
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mt-6">
              We want every student to understand concepts by
              experimenting and exploring instead of memorizing.
            </p>

          </div>

          <div className="bg-[#EFE8DC] rounded-[32px] p-10">

            <h2 className="text-3xl font-black">
              Built with AI
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed mt-6">
              Prologue uses AI to generate custom interactive visuals
              instantly for any subject, topic, or grade level.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}