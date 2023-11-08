import React from 'react';

function HowItWorks() {
    return (
        <div className="flex justify-center mt-16">
            <div className="max-w-big">
                <h1 className="text-4xl text-text-title font-['Patua_One']">
                    How it works?
                </h1>
                <p className="text-text-desc text-base mt-6 font-['Roboto_Mono'] max-w-lg">
                    Taking a 16-digit hash value, we divide our sound scale into numerical values from 1 to 9 and letter
                    values from A to F, known to all classical and jazz musicians, and create an equation for harmony.
                </p>
            </div>
        </div>
    );
}

export default HowItWorks;