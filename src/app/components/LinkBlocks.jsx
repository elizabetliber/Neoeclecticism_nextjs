import React from 'react';
import Image from 'next/image'
import Link from "next/link";


const data = [
    {
        id: 1,
        src: "/images/block-one.png",
        title: "Neoeclecticism",
        desc: "NFTs + Fan Posters. Art Collab Nizovtsev x Notahash",
        href: "/description"
    },
    {
        id: 2,
        src: "/images/block-two.png",
        title: "Pan Amsterdam, Notahash — TwitCoin (Dogecoin)",
        desc: "NFTs + Single",
        href: "/"
    },
    {
        id: 3,
        src: "/images/block-two.png",
        title: "Notahash — Pavel Durov’s wallet (TON)",
        desc: "NFTs + Single. Music Collab PlayMuse x Notahash",
        href: "/"
    },
    {
        id: 4,
        src: "/images/block-two.png",
        title: "Art Collab Jason Nolan x  Nizovtsev x Notahash",
        desc: "NFTs + Fan Posters + 3D Print",
        href: "/"
    },
]


function LinkBlocks() {
    return (
        <div className="flex justify-center mt-28 z-10">
            <div className="w-full max-w-block flex flex-row flex-wrap items-start gap-x-4">
                {data.map((data) => {
                    return <Link href={data.href} key={data.id} className="max-w-[368px] flex flex-col justify-center mb-11">
                            <Image src={data.src} alt="block" width={368} height={368} className="mb-6"/>
                            <p className="font-['Patua_One'] text-[32px] text-text-title mb-2">{data.title}</p>
                            <p className="font-['Roboto_Mono'] text-xl text-text-desc">{data.desc}</p>
                    </Link>
                })}
            </div>
        </div>
    );
}

export default LinkBlocks;