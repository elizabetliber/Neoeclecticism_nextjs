import React from 'react';
import Image from "next/image";

function Printing() {
    return (
        <div className='flex justify-center py-32 border-b-2 border-[#232A23]'>
            <Image
                src="/images/printing-press-notahash-neoeclecticism.jpg"
                alt="/images/printing-press-notahash-neoeclecticism.jpg"
                width={602}
                height={604}
            />
        </div>
    );
}

export default Printing;