import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="p-8 font-sans">
      <h1 className="text-3xl font-bold text-blue-600">
        ¡TailwindCSS está funcionando! 💨
      </h1>
      <p className="mt-2 text-gray-600">
        Si ves este texto gris y el título azul, todo está correcto.
      </p>
    </main>
  );
}
