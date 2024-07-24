import type { Config } from "tailwindcss";

export default {
    plugins: [require("@tailwindcss/typography")],
    content: ["./WebApplication1/**/*.{html,cshtml,cs,razor,js,jsx,ts,tsx}"],
} satisfies Config;
