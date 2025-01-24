export default function Navbar() {
  return (
    <nav className='fixed flex w-[95vw] ml-[2.5vw] justify-between items-center py-6 border-b border-white/50 backdrop-blur-sm z-60'>
      <div id='left-nav' className='flex'>
        <p className='font-serif text-md'>Rachel Perez</p>
        <p className='font-sans font-normal text-base ml-4'>
          FULL-STACK DEVELOPER
        </p>
      </div>
      <div id='right-nav' className=''>
        <a>work</a>
      </div>
    </nav>
  );
}
