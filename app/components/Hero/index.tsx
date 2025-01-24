import ContactMe from "~/components/Buttons/ContactMe";

export default function Hero() {
  return (
    <header className='w-full flex justify-between absolute bottom-2 pt-[73px]'>
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
    </header>
  );
}
