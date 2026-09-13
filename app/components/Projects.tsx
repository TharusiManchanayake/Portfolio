type Project = {
  title: string;
  role: string;
  description: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "RouteMe",
    role: "Capstone Project — Team of 5",
    description:
      "A real-time bus tracking and transit management web application. Built the admin dashboard (buses, routes, stops, trips, users) with search, filtering, pagination, and stat cards. Live tracking uses HTTP polling. Backend built with Node.js, Express, and Sequelize.",
    tech: ["Next.js", "TypeScript", "Node.js", "Express", "Sequelize", "Tailwind CSS"],
  },
  {
    title: "PantryPal",
    role: "Mobile App — Internship-oriented Project",
    description:
      "A food pantry and waste-reduction mobile app. Integrated Supabase for authentication and data, and Groq AI for image scanning to identify pantry items. Four of five screens fully wired to live services.",
    tech: ["React Native", "Expo", "Supabase", "Groq AI"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-10">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
            <p className="text-sm text-amber-600 font-medium mb-3">{project.role}</p>
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}