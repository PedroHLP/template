/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./public/**/*.svg",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary:                  "hsl(var(--primary))",
        "primary-foreground":     "hsl(var(--primary-foreground))",
        destructive:              "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        secondary:                "hsl(var(--secondary))",
        "secondary-foreground":   "hsl(var(--secondary-foreground))",
        ghost:                    "hsl(var(--ghost))",
        "ghost-foreground":       "hsl(var(--ghost-foreground))",
        accent:                   "hsl(var(--accent))",
        "accent-foreground":      "hsl(var(--accent-foreground))",
      },
    },
  },
  plugins: [
    require("tw-animate-css"),
  ],
};
