import React from 'react';
import Image from "next/image";

function Optimism() {
    return (
        <div className="flex flex-row mt-20">
            <div className="flex flex-col flex-[0_1_33.2%] border-y-2 border-l-2 border-[#232A23] px-24 py-36">
                <Image
                    width={225}
                    height={30}
                    src="/images/optimism-logo.svg"
                    alt="/images/optimism-logo.svg"
                />
            </div>
            <div className="flex-[0_1_66.8%] border-2 border-[#232A23] p-20">
                <p className="font-['Patua_One'] text-[36px] text-text-title">Why Optimism?</p>
                <p className="font-['Roboto_Mono'] text-text-desc text-xl leading-[32px] tracking-[0.24px]">
                    We chose the Optimism network due to its low gas fees and fast transactions. Additionally, Optimism
                    is focused on donations for public goods.
                </p>
            </div>
        </div>
    );
}

export default Optimism;