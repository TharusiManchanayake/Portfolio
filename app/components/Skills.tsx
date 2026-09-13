const skillGroups = [
  {
    category: "Frontend",
    skills: ["Next.js", "React", "React Native", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Sequelize"],
  },
  {
    category: "Database & Cloud",
    skills: ["MySQL", "Supabase"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Vercel", "Expo"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 border-y border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-10">Skills</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}