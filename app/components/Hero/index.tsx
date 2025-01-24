import ContactMe from '~/components/Buttons/ContactMe';

export default function Hero() {
    return (
        <header className="absolute bottom-2 flex w-full justify-between pt-[73px]">
            <div id="left-hero self-end">
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
