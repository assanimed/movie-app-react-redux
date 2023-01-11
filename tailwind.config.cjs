/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            'search': ['Rubik', 'sans-serif'],
            'roboto': ['Roboto'],
        },
        gridTemplateColumns: {
            "autofill": "repeat(auto-fit, minmax(220px, 1fr));"
        }
    },
    plugins: [],
}