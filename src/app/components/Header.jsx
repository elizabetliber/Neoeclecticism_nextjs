import React from 'react';
import Link from "next/link";
import Image from "next/image";

function Header() {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-big flex justify-center">
                <div className="w-full max-w-lg">
                    <Link
                        href={"/"}
                    >
                        <Image
                            src="/images/LOGO.svg"
                            alt="logo"
                            width={364}
                            height={83}
                            className="z-2"
                        />
                    </Link>
                    {/*<div className="absolute top-0 left-0">*/}
                    {/*    <Image*/}
                    {/*        src="/images/background.png"*/}
                    {/*        width={1133}*/}
                    {/*        height={1133}*/}
                    {/*        className="z-1"*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}

export default Header;