import Hero from './components/home/Hero';
import Projects from './components/home/Projects';
import Contact from './components/home/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900">
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}
