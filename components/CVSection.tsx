import { experience, education, languages } from "@/data/cv";

export default function CVSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 mt-10">
      <div>
        <p className="font-bold mb-4">Experience</p>
        <div className="space-y-4">
          {experience.map((e) => (
            <div key={`${e.role}-${e.period}`}>
              <p className="font-bold">{e.role}</p>
              <p className="text-gray-500">
                {e.company} · {e.type}
              </p>
              <p className="text-gray-500">{e.period}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="font-bold mb-4">Education</p>
        <div className="space-y-4">
          {education.map((e) => (
            <div key={e.degree}>
              <p className="font-bold">{e.degree}</p>
              <p className="text-gray-500">{e.title}</p>
              <p className="text-gray-500">{e.location}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="font-bold mb-4">Languages</p>
        <div className="space-y-4">
          {languages.map((l) => (
            <div key={l.language}>
              <p className="font-bold">{l.level}</p>
              <p className="text-gray-500">{l.language}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
