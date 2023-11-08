import React from 'react';
import Image from 'next/image'


const data = [
    {id: 1, src: "/social_logo/ic-spotify.svg"},
    {id: 2, src: "/social_logo/ic-apple-music.svg"},
    {id: 3, src: "/social_logo/ic-amazon.svg"},
    {id: 4, src: "/social_logo/ic-tidal.svg"},
    {id: 5, src: "/social_logo/ic-showtime.svg"},
    {id: 6, src: "/social_logo/ic-twitter.svg"},
    {id: 7, src: "/social_logo/ic-instagram.svg"},
    {id: 8, src: "/social_logo/ic-youtube.svg"},
    {id: 9, src: "/social_logo/ic-discord.svg"},
    {id: 10, src: "/social_logo/ic-tiktok.svg"},
    {id: 11, src: "/social_logo/ic-medium.svg"},
]


function SocialMedia() {
    return (
        <div className="flex flex-col items-center mt-28">
            <p className="text-4xl font-['Roboto_Mono'] text-center text-text-title mb-8">We are on social media</p>
            <div className="w-full max-w-big flex flex-row flex-wrap justify-center gap-x-3">
                {data.map((data) => {
                    return <div key={data.id} className="max-w-[72px] mb-11">
                        <Image src={data.src} alt="social_media" width={72} height={72}/>
                    </div>
                })}
            </div>
        </div>
    );
}

export default SocialMedia;