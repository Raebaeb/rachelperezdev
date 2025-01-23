export default function Navbar() {
  return (
    <nav className='flex justify-between items-center py-5 border-b border-white/50'>
      <div id='left-nav' className='flex justify-between'>
        <p className='font-serif text-md'>Rachel Perez</p>
        <p className='font-sans font-normal text-base ml-4'>
          FULL-STACK DEVELOPER
        </p>
      </div>
      <div id='right-nav'></div>
    </nav>
  );
}
