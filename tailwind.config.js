/** @type {import('tailwindcss').Config} */
import scrollHide from "tailwind-scrollbar-hide";
import tailwindRtl from "tailwindcss-rtl";
import scrollbarStyle from "tailwind-scrollbar";
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            xs: "450px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            colors: {
                "primary-color": "var(--primary-color)",
                "secondary-color": "var(--secondary-color)",
                "third-color": "var(--third-color)",
                "forth-color": "var(--forth-color)",
                "success-color": "var(--success-color)",
                "danger-color": "var(--danger-color)",
                "warning-color": "var(--warning-color)",
                "text-color": "var(--text-color)",
            },
        },
    },
    plugins: [scrollHide, tailwindRtl, scrollbarStyle],
};
