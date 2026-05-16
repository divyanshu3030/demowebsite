import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const features = [
  {
    title: "Live Physics",
    image: "/1.png",
    desc: "Explore gravity, motion, force, and energy through live simulations you can interact with.",
  },
  {
    title: "Interactive Math",
    image: "/2.png",
    desc: "Understand graphs, derivatives, geometry, and equations visually instead of memorizing formulas.",
  },
  {
    title: "Visual Chemistry",
    image: "/3.png",
    desc: "Watch reactions, molecules, and atomic structures behave in real time through interaction.",
  },
  {
    title: "AI Explanations",
    image: "/4.png",
    desc: "Get short, guided explanations connected directly to the visual you are exploring.",
  },
  {
    title: "Predict & Check",
    image: "/5.png",
    desc: "Make predictions before interacting and learn faster by testing your intuition instantly.",
  },
  {
    title: "Touch Learning",
    image: "/6.png",
    desc: "Drag, move, zoom, and manipulate concepts naturally instead of passively watching.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />

      <section
        id="features"
        className="py-24 px-8 md:px-14 lg:px-24 bg-[#F7F2EA] text-[#1C1917]"
      >
        <div className="max-w-[1600px] mx-auto">

          <p className="text-[var(--vermillion)] font-semibold uppercase tracking-[0.3em]">
            Features
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mt-8 max-w-5xl">
            Built to make learning feel interactive.
          </h1>

          <p className="text-2xl text-neutral-700 leading-relaxed mt-8 max-w-4xl">
            Every concept becomes something students can explore,
            manipulate, and truly understand through interaction.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-24">

            {features.map((item) => (
              <div
                key={item.title}
                className="bg-[var(--cream)] rounded-[36px] overflow-hidden"
              >

                <img
                  src={item.image}
                  className="w-full h-[420px] object-cover"
                />

                <div className="p-10">

                  <h3 className="text-4xl font-black">
                    {item.title}
                  </h3>

                  <p className="text-lg text-neutral-700 leading-relaxed mt-6">
                    {item.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}