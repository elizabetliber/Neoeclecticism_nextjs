/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'text-title': '#F3F3F3',
                'text-desc': 'rgb(243, 243, 243, 70%)',
            },
            maxWidth:{
                sm: '422px',
                small: '672px',
                title_with_img_one: "739px",
                title_with_img_two: "789px",
                lg: '752px',
                link: '657px',
                block: '1136px',
                big: '1286px',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
