export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">About</h2>
      <div className="max-w-3xl">
        <p className="text-gray-600 leading-relaxed mb-4">
          I&apos;m an undergraduate at the Faculty of Computing, Sabaragamuwa
          University of Sri Lanka, reading for a BSc (Hons) in Information
          Systems. I work across the full stack — comfortable building
          frontends in Next.js, React, and React Native, and backends with
          Node.js, Express, and Sequelize.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          My capstone project, <span className="font-medium text-gray-900">RouteMe</span>,
          is a real-time bus tracking and transit management system built with
          a five-person team, where I worked on the admin dashboard and
          backend search, filtering, and pagination logic. Alongside that,
          I&apos;ve been building <span className="font-medium text-gray-900">PantryPal</span>,
          a food-waste-reduction mobile app using React Native, Supabase, and
          AI-powered image scanning.
        </p>
        <p className="text-gray-600 leading-relaxed">
          I&apos;m currently looking for internship opportunities where I can
          keep building real products and learning from experienced teams.
        </p>
      </div>
    </section>
  );
}