/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "concrete": "url('/src/assets/black-background.png')"
            }
        },
    },
    plugins: [
    ],
}