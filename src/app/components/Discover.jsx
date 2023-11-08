import React from 'react';
import Image from "next/image";

function Discover() {
    return (
        <div className="flex flex-col items-center mt-20">
            <div className="w-full max-w-title_with_img_two">
                <div className="w-full mt-[69px]">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-[36px] w-[672px] leading-[56px] text-text-title font-['Patua_One']">
                            Discover Neoeclecticism:<br/>
                            Unlock Exclusive Access
                        </p>
                        <div
                            className="mt-6 flex flex-col w-[672px] font-['Roboto_Mono'] gap-y-8 text-text-desc text-base leading-[32px] tracking-[0.24px]">
                            <p>
                                We've created the Neoeclecticism collection to gather our early fans who will join us on
                                our journey. Purchasing a Neoeclecticism collectible grants you a pre-sale price for our
                                new 'Source' collection.
                            </p>
                            <p>
                                By supporting us, you help launch the 'Source' collection, where the first 20 owners
                                will possess a track based on the hash value of their wallet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center mt-20">
                <Image
                    src="/images/buterin.png"
                    alt="/images/buterin.png"
                    width={848}
                    height={480}
                />
                <p className="text-center font-['Roboto_Mono'] text-text-desc text-base leading-[32px] tracking-[0.24px] mt-5">
                    Collectible Digital Item from the 'Source' Collection.<br/>
                    Notahash - Vitalik Buterin's Wallet.
                </p>
            </div>
        </div>
    );
}

export default Discover;