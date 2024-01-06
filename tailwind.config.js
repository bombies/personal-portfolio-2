/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        screens: {
            desktop: {"max": "1920px"},
            "laptop-big": {"max": "1440px"},
            laptop: {"max": "1280px"},
            tablet: {"max": "1025px"},
            phone: {"max": "615px"},
            "laptop-min": {"min": "1280px"},
            "tablet-min": {"min": "1025px"},
            "phone-min": {"min": "615px"}
        },
        extend: {
            colors: {
                primary: "#20c573",
                subtext: "#828282",
                secondary: "#00a244",
                dark: "#001509",
                darker: "#000f03",
                danger: "#FF4A4A",
                destructive: "#FF4A4A",
            },
            keyframes: {
                "accordion-down": {
                    from: {height: "0"},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: "0"},
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}