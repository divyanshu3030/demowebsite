export default function Problem() {
  return (
    <section className="py-15 px-10 px-8 md:px-14 lg:px-24">
      <div className="max-w-7xl mx-auto">

        <p className="text-[var(--vermillion)] font-semibold uppercase tracking-widest">
          The Problem
        </p>

        <h2 className="text-4xl md:text-6xl font-black leading-tight max-w-4xl">
          Most students don't fail because they aren't trying.
        </h2>

        <p className="mt-10 text-xl leading-relaxed text-neutral-700 max-w-3xl">
          They fail because nobody ever showed them what the
          concept actually looks like.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-[var(--cream)] rounded-[32px] p-8">
            <h3 className="text-3xl font-bold">
              Textbooks
            </h3>

            <p className="mt-4 text-neutral-700">
              Static diagrams and paragraphs force students
              to imagine motion and interaction in their heads.
            </p>
          </div>

          <div className="bg-[var(--cream)] rounded-[32px] p-8">
            <h3 className="text-3xl font-bold">
              Videos
            </h3>

            <p className="mt-4 text-neutral-700">
              Watching someone else explain a concept is still passive.
            </p>
          </div>

          <div className="bg-[var(--cream)] rounded-[32px] p-8">
            <h3 className="text-3xl font-bold">
              AI Chatbots
            </h3>

            <p className="mt-4 text-neutral-700">
              They give answers instantly without building intuition.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}