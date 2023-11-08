import React from 'react';
import Image from "next/image";
import Link from "next/link";

function Author() {
    return (
        <div className="flex flex-row mt-10">
            <div className="flex-[0_1_66.8%] border-2 border-[#232A23] px-20 py-28">
                <p className="font-['Patua_One'] text-[36px] text-text-title mt-3">Vladimir Nizovtsev</p>
                <p className="font-['Roboto_Mono'] text-text-desc text-base leading-[32px] tracking-[0.24px]">
                    Notahash is embarking on our journey with our first collection, starting with a collaboration with a
                    talented artist whose works will be sought after by collectors—it's only a matter of time. Why do we
                    think so? You will find out a little later. Look for clues around
                </p>
            </div>
            <div className="flex flex-col flex-[0_1_33.2%] border-y-2 border-r-2 border-[#232A23] px-28 pb-24 pt-20">
                <Image
                    width={195}
                    height={179}
                    src="/images/Vector_2.png"
                    alt="/images/Vector_2.png"
                />
                <Link href="" className="flex justify-center items-center text-[#19CD99] text-xl font-['Roboto_Mono'] mt-4">
                    <Image
                        width={48}
                        height={32}
                        src="/images/twitter-icon-green-button.svg"
                        alt="/images/twitter-icon-green-button.svg"
                    />
                    @Nizovtsev
                </Link>
            </div>
        </div>
    );
}

export default Author;