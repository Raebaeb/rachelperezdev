export default function Navbar() {
  return (
    <nav className='fixed flex justify-between items-center py-6 w-full border-b border-white/50 backdrop-blur-sm'>
      <div id='left-nav' className='flex'>
        <p className='font-serif text-md'>Rachel Perez</p>
        <p className='font-sans font-normal text-base ml-4'>
          FULL-STACK DEVELOPER
        </p>
      </div>
      <div id='right-nav'>
        <a>work</a>
      </div>
    </nav>
  );
}
