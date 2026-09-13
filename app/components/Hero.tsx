export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 text-center">
      <p className="text-sm font-medium text-amber-600 mb-3">
        BSc (Hons) Information Systems — Sabaragamuwa University of Sri Lanka
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
      Hi, I&apos;m Tharusi
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        Full-stack developer building across web and mobile — Next.js &amp; React Native
        on the frontend, Node.js &amp; Express on the backend.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#projects" className="px-6 py-3 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700">
          View Projects
        </a>
        <a href="/resume.pdf" className="px-6 py-3 rounded-lg border border-gray-300 text-gray-900 text-sm font-medium hover:bg-gray-50">
          Download CV
        </a>
      </div>
    </section>
  );
}