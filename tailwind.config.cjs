/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
				script: ['"Dancing Script"', "cursive"],
			},
			colors: {
				brand: { DEFAULT: "#1C57F0", dark: "#1244CC", soft: "#E8EEFF" },
				ink: { DEFAULT: "#0D1321", mid: "#3D4555", muted: "#6B7280" },
				hairline: "#E8EAF0",
				tp: "#00B67A",
				// shadcn tokens
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
				popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
				primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
				secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
				muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
				accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
				destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					1: "hsl(var(--chart-1))", 2: "hsl(var(--chart-2))", 3: "hsl(var(--chart-3))",
					4: "hsl(var(--chart-4))", 5: "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"fade-up":    { "0%": { opacity: "0", transform: "translateY(28px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
				"fade-up-lg": { "0%": { opacity: "0", transform: "translateY(36px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
				"spin-slow":  { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } },
				"pulse-skel": { "0%,100%": { opacity: "0.45" }, "50%": { opacity: "1" } },
				"accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
				"accordion-up":   { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
			},
			animation: {
				"fade-up":    "fade-up 0.65s cubic-bezier(0.22,0.9,0.4,1) forwards",
				"fade-up-lg": "fade-up-lg 0.7s cubic-bezier(0.22,0.9,0.4,1) forwards",
				"spin-slow":  "spin-slow 14s linear infinite",
				"pulse-skel": "pulse-skel 1.4s ease-in-out infinite",
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up":   "accordion-up 0.2s ease-out",
			},
			boxShadow: {
				"brand-cta":  "0 4px 18px rgba(28,87,240,0.25)",
				"brand-ctaH": "0 8px 28px rgba(28,87,240,0.32)",
				"card-hover": "0 24px 48px -20px rgba(13,19,33,0.18)",
			},
			backgroundImage: {
				"dots-white-04": "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
				"dots-white-07": "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
