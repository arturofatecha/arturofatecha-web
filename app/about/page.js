export default function AboutPage() {
  return (
    <main>
      <h1 className="text-2xl font-semibold mb-4">Sobre mí</h1>

      <p className="text-gray-700 mb-6">
        Systems Engineer @ Fortinet — especialista en soluciones FortiGate, FortiSwitch y FortiAP.  
        Aprendiendo DevSecOps y automatización cloud paso a paso.
      </p>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="p-4 rounded-xl border border-gray-200 hover:shadow-sm transition">
          <h2 className="font-medium text-gray-800">Rol actual</h2>
          <p className="text-gray-600 mt-1">
            Systems Engineer (LATAM & Canadá Sales Region)
          </p>
        </div>

        <div className="p-4 rounded-xl border border-gray-200 hover:shadow-sm transition">
          <h2 className="font-medium text-gray-800">Objetivo</h2>
          <p className="text-gray-600 mt-1">
            Construir mi portafolio DevSecOps en 2 semanas.
          </p>
        </div>
      </section>
    </main>
  );
}