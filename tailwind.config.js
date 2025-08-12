/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        border: 'hsl(var(--border))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        
        // Credit Scoring colors - HSL format
        'brand-primary': 'hsl(var(--credit-scoring-primary))',
        'brand-secondary': 'hsl(var(--credit-scoring-secondary))',
        'brand-bg-light': 'hsl(var(--credit-scoring-bg-light))',
        'brand-bg-card': 'hsl(var(--credit-scoring-bg-card))',
        'brand-text-primary': 'hsl(var(--credit-scoring-text-primary))',
        'brand-text-secondary': 'hsl(var(--credit-scoring-text-secondary))',
        'brand-border': 'hsl(var(--credit-scoring-border))',
        'status-excellent': 'hsl(var(--status-excellent))',
        'status-very-good': 'hsl(var(--status-very-good))',
        'status-good': 'hsl(var(--status-good))',
        'status-fair': 'hsl(var(--status-fair))',
        'status-poor': 'hsl(var(--status-poor))',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
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