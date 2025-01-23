import Navbar from "~/components/Nav";
import type { Route } from "./+types/home";
import ContactMe from "~/components/Buttons/ContactMe";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rachel Perez Portfolio" },
    { name: "description", content: "Frontend developer portfolio website" },
  ];
}

export default function Home() {
  return (
    <div className='relative h-full w-full mx-8'>
      <Navbar />
      <div className='w-full flex justify-between absolute bottom-2'>
        <div id='left-hero self-end'>
          <p className='animate-fade animate-once animate-delay-1000 animate-ease-in mb-2 font-serif text-xl'>
            frontend biased
          </p>
          <h1 className='animate-fade-up animate-once animate-duration-1000 animate-ease-in pt-4 font-special text-[20em]/[18rem] text-transparent bg-[url(/media/forget-me-not-henseler.jpeg)] bg-clip-text'>
            DEVELOPER<span className='font-serif text-5xl'>&</span>
            <br />
            DESIGNER
          </h1>
        </div>
        <div id='right-hero'>
          <ul className='font-bold'>
            <li>SWE Bootcamp graduate</li>
            <li>Background in fine & digital arts</li>
            <li>Detail obsessed</li>
            <li>Professional pixel pusher</li>
          </ul>
          <ContactMe />
        </div>
      </div>
    </div>
  );
}
