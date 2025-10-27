import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>👋 Hola, soy Arturo</h1>
      <p>Mi primera página con Next.js (v1.0).</p>
    </main>
  );
}
