export default function Navbar() {
    return (
        <nav className="fixed z-60 flex w-full items-center border-b border-white/50 py-6 backdrop-blur-sm">
            <div id="left-nav" className="flex">
                <p className="text-md font-serif">Rachel Perez</p>
                <p className="ml-4 font-sans text-base font-normal">
                    FULL-STACK DEVELOPER
                </p>
            </div>
            <div id="right-nav" className="ml-auto">
                <a>my work</a>
                <a>about me</a>
            </div>
        </nav>
    )
}
