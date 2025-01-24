import ContactMe from '~/components/Buttons/ContactMe';

export default function Hero() {
    return (
        <header className="absolute bottom-2 flex w-full justify-between pt-[73px]">
            <div id="left-hero self-end">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="icon icon-tabler icons-tabler-filled icon-tabler-flare"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M11.106 2.553a1 1 0 0 1 1.788 0l2.851 5.701l5.702 2.852a1 1 0 0 1 .11 1.725l-.11 .063l-5.702 2.851l-2.85 5.702a1 1 0 0 1 -1.726 .11l-.063 -.11l-2.852 -5.702l-5.701 -2.85a1 1 0 0 1 -.11 -1.726l.11 -.063l5.701 -2.852z" />
                </svg>
                <p className="mb-2 animate-fade font-serif text-xl animate-delay-1000 animate-ease-in animate-once">
                    frontend biased
                </p>
                <h1 className="animate-fade-up bg-[url(/media/forget-me-not-henseler.jpeg)] bg-clip-text pt-4 font-special text-[20em]/[18rem] text-transparent animate-duration-1000 animate-ease-in animate-once">
                    DEVELOPER<span className="font-serif text-5xl">&</span>
                    <br />
                    DESIGNER
                </h1>
            </div>
            <div id="right-hero">
                <ul className="font-bold">
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
