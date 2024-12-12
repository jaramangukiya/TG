/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
            clifford: '#da373d',
        },
        container: {
            center: true,
            screens: {
                sm: '540px',
                md: '720px',
                lg: '960px',
                xl: '1140px',
                '2xl': '1320px',
            }
        }
    }
},
  plugins: [],
};
