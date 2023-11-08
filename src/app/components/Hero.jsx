"use client";
import React from 'react';
import {TypeAnimation} from 'react-type-animation';
import Link from "next/link";

function Hero() {
    return (
        <div className="flex justify-center mt-28 z-10">
            <div className="max-w-big">
                <h1 className="text-5xl text-text-title font-['Patua_One']">
                    <TypeAnimation
                        sequence={[
                            'Wallet Music',
                            1000,
                            'Blockchain history',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                    <br></br>
                    Blockchain history
                </h1>
                <p className="text-text-desc text-base mt-8 font-['Roboto_Mono'] max-w-lg">
                    Notahash manually converts hash values (used by Bitcoin and Ethereum Virtual Machine to represent
                    addresses, externally-owned accounts or wallets, contract accounts, transactions, or some parts
                    of
                    the
                    code) into music and thereby tells the blockchain story through Music NFT.
                </p>

                <p className="text-text-desc text-base mt-8 font-['Roboto_Mono'] max-w-lg">
                    Our project is dedicated to
                    people, companies, and events influencing the emerging decentralized
                    crypto
                    space.
                    <Link href="/description" className="text-white">description</Link>
                </p>
            </div>
        </div>
    );
}

export default Hero;