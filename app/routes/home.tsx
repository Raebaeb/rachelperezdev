import Navbar from "~/components/Nav";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rachel Perez Portfolio" },
    { name: "description", content: "Frontend developer portfolio website" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className='font-special text-[16em]/[12rem] tracking-tighter '>
        Developer<span className='font-serif text-5xl'>&</span>
      </h1>
      <h1 className='font-special text-[16em]/[12rem] tracking-tighter'>
        Designer
      </h1>
    </>
  );
}
