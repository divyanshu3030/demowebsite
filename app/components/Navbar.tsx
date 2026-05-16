import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-8 md:px-14 lg:px-24 py-8 z-50 bg-[var(--paper)]/80 backdrop-blur-xl">

      <div className="max-w-[1600px] mx-auto flex items-center justify-between">

        <Link
          href="/"
          className="text-3xl font-black"
        >
          Prologue
        </Link>

        <div className="hidden md:flex items-center gap-10 text-lg font-medium">

          <Link
            href="/features"
            className="hover:text-[var(--vermillion)] transition"
          >
            Features
          </Link>

          <Link
            href="/pricing"
            className="hover:text-[var(--vermillion)] transition"
          >
            Pricing
          </Link>

          <Link
            href="roadmap"
            className="hover:text-[var(--vermillion)] transition"
          >
            Roadmap
          </Link>

          <Link
            href="/about"
            className="hover:text-[var(--vermillion)] transition"
          >
            About
          </Link>

        </div>

        <button className="bg-[var(--vermillion)] hover:opacity-90 transition text-white px-7 py-4 rounded-full font-semibold">
          Start Learning
        </button>

      </div>

    </nav>
  );
}