/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                coffee: "#DDB998",
                grey: "#9B8F84",
                teal: "#547E88"
            },
            fontFamily: {
                NovoMono: ['Novo Mono', "monospace"],
                RedHat: ["Red Hat Mono", "monospace"],
            },
        },
    },
    plugins: [],
};

