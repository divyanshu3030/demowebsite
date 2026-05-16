export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-15 px-8 md:px-14 lg:px-24">

      <div className="max-w-[1600px] mx-auto grid md:grid-cols-3 gap-16">

        <div>

          <h2 className="text-4xl font-black">
            Prologue
          </h2>

          <p className="mt-6 text-xl text-neutral-700 leading-relaxed max-w-md">
            Every student should be able to understand anything
            they are curious about.
          </p>

        </div>

        <div>

          <h3 className="text-2xl font-bold">
            Product
          </h3>

          <ul className="space-y-5 mt-8 text-lg text-neutral-700">
            <li>Features</li>
            <li>Pricing</li>
            <li>Roadmap</li>
            <li>Boards</li>
          </ul>

        </div>

        <div>

          <h3 className="text-2xl font-bold">
            Company
          </h3>

          <ul className="space-y-5 mt-8 text-lg text-neutral-700">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>

        </div>

      </div>

      <div className="max-w-[1600px] mx-auto mt-24 pt-10 border-t border-black/10 flex flex-col md:flex-row justify-between gap-6">

        <p className="text-neutral-500">
          © 2026 Prologue. All rights reserved.
        </p>

        <p className="text-neutral-500">
          Don't read it. Touch it.
        </p>

      </div>

    </footer>
  );
}