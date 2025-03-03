/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Updated color palette based on new theme
        brand: {
          50: '#e0f2ff',
          100: '#c2e4ff',
          200: '#99d1ff',
          300: '#66b5ff',
          400: '#3a9aff',
          500: '#007AFF', // primary color
          600: '#0062cc',
          700: '#0049a6',
          800: '#003580',
          900: '#00224d',
          950: '#001326',
        },
        neon: {
          50: '#f5ffe0',
          100: '#e8ffc2',
          200: '#d6ff99',
          300: '#cbff70',
          400: '#c2ff47',
          500: '#b4ff00', // neon green
          600: '#8fcc00',
          700: '#699900',
          800: '#466600',
          900: '#233300',
          950: '#121a00',
        },
        surface: {
          50: '#ffffff', // system-background (light)
          100: '#f2f2f7', // input-background (light)
          200: '#e5e5ea',
          300: '#d1d1d6',
          400: '#c7c7cc',
          500: '#aeaeb2',
          600: '#8e8e93',
          700: '#86868b', // text-secondary
          800: '#1c1c1e', // card-background (dark)
          900: '#121214',
          950: '#000000', // background (dark)
        },
        error: {
          500: '#ff3b30', // error-color
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      boxShadow: {
        'once-sm': '0 2px 8px rgba(0, 0, 0, 0.1)', // card-shadow
        'once-md': '0 4px 12px rgba(0, 0, 0, 0.15)', // elevated shadow
        'once-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'once-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'once-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'once-inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        'once-sm': '0.25rem',
        'once-md': '0.375rem',
        'once-lg': '0.5rem',
        'once-xl': '0.75rem',
        'once-2xl': '1rem',
        'once-3xl': '1.5rem',
        'once-full': '9999px',
        'default': '16px', // --border-radius
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        'in': 'in 0.2s ease-out',
        'bounce': 'bounce 1s infinite',
        'slideFromLeft': 'slideFromLeft 0.3s ease-out',
        'slideFromRight': 'slideFromRight 0.3s ease-out',
        'slideIn': 'slideIn 0.3s ease-out',
        'fadeIn': 'fadeIn 0.3s ease-out',
        'rotate': 'rotate 0.8s linear infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        in: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20%)' },
        },
        slideFromLeft: {
          'from': { opacity: 0, transform: 'translateX(-20px)' },
          'to': { opacity: 1, transform: 'translateX(0)' },
        },
        slideFromRight: {
          'from': { opacity: 0, transform: 'translateX(20px)' },
          'to': { opacity: 1, transform: 'translateX(0)' },
        },
        slideIn: {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        },
        rotate: {
          'from': { transform: 'translateY(-50%) rotate(0deg)' },
          'to': { transform: 'translateY(-50%) rotate(360deg)' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      spacing: {
        'header': '70px', // --header-height
        'sidebar': '320px', // --sidebar-width
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}