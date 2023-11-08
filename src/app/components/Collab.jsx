import Link from "next/link";
import Image from "next/image";

function Collab() {
    return (
        <div className="flex flex-col items-center mt-20">
            <div className="w-full max-w-title_with_img_two">
                <div className="flex justify-end">
                    <div className="w-full max-w-[672px]">
                        <Link href="/" className="text-text-desc text-base font-['Roboto_Mono']"><span
                            className="text-[#19CD99]">&lt; main </span>_ neoeclecticism</Link>
                    </div>
                </div>
                <div className="w-full mt-[69px]">
                    <div className="flex justify-center items-center  flex-row ">
                        <Image
                            width={101}
                            height={92}
                            src="/images/Vector.png"
                            className="mr-4 h-[92px]"
                        />
                        <h1 className="text-5xl w-[672px] leading-[56px] text-text-title font-['Patua_One']">
                            Neoeclecticism.<br/>
                            Collab Nizovtsev x Notahash
                        </h1>
                    </div>
                </div>
                <div className="flex justify-end mt-10">
                    <div className="w-full max-w-[672px] text-text-desc text-base font-['Roboto_Mono'] flex flex-col gap-y-6 leading-[32px] tracking-[0.24px]">
                        <p>
                            Imagine a world with a nonlinear flow of time.
                            A synesthetic epoch, where time can be seen, felt, and heard.
                            Where sensory perception is the foundation of consciousness.
                        </p>
                        <p>
                            Creating the universe of Neoeclecticism, we wanted to showcase images crystallized from the
                            digital void of neural networks, reflecting all the possible diversity of the times we know,
                            if they merged into one stream.
                        </p>
                        <p>
                            The appearance of the inhabitants of Neoeclecticism is a vibrant manifesto that screams
                            about the freedom of choice and the freedom of interpretation of feelings. The foundation of
                            Neoeclecticism is a reimagined synesthesia that allows for a broader perception and
                            understanding of the ordinary.
                        </p>
                        <p>
                            Each character in Neoeclecticism is a timeless fractal that sends the viewer on an infinite
                            journey through their own imagination. The name of each character is a secret hint that will
                            help the viewer find their personal point for rebuilding their perception of the world and
                            opening the boundaries beyond which an inexhaustible source of inspiration awaits.
                        </p>
                        <p>
                            Pre-sale price for tokens of the <span className="text-[#19CD99]">'Source'</span> collection
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collab;