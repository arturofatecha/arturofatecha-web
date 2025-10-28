function ProjectCard({ title, desc, status }) {
  return (
    <div className="p-5 rounded-xl border border-gray-200 hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-1">{desc}</p>
      <span className="inline-block mt-3 text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
        {status}
      </span>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main>
      <h1 className="text-2xl font-semibold mb-4">Proyectos</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        <ProjectCard
          title="Laboratorio DevSecOps personal"
          desc="Home lab con CI/CD, escaneo básico y simulación de incidentes."
          status="En progreso"
        />
        <ProjectCard
          title="Charlas de concienciación"
          desc="Material educativo y demos de ciberseguridad para equipos no técnicos."
          status="Publicado"
        />
      </div>
    </main>
  );
}