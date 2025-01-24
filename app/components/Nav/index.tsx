export default function Navbar() {
  return (
    <nav className="flex w-full items-center py-6 border-b border-white/50 backdrop-blur-sm fixed z-60">
      <div id="left-nav" className="flex">
        <p className="font-serif text-md">Rachel Perez</p>
        <p className="font-sans font-normal text-base ml-4">
          FULL-STACK DEVELOPER
        </p>
      </div>
      <div id="right-nav" className="ml-auto">
        <a>work</a>
        <a>about me</a>
      </div>
    </nav>
  );
}
