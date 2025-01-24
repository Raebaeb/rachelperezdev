import Navbar from "~/components/Nav";
import type { Route } from "./+types/home";
import Hero from "~/components/Hero";

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rachel Perez Portfolio" },
    { name: "description", content: "Frontend developer portfolio website" },
  ];
}

export default function Home() {
  return (
    <div className='w-screen px-8'>
      <Navbar />
      <Hero />
      <main className='w-full flex justify-between absolute bottom-2'></main>
    </div>
  );
}
