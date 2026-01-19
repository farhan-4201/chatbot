/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#00f2ff', // Cyber Cyan
          glow: 'rgba(0, 242, 255, 0.5)',
        },
        secondary: {
          DEFAULT: '#ff00e5', // Cyber Magenta
          glow: 'rgba(255, 0, 229, 0.5)',
        },
        accent: {
          DEFAULT: '#7cfc00', // Neon Lime
          glow: 'rgba(124, 252, 0, 0.5)',
        },
        hot: '#ff1f1f',
        warm: '#ff8a00',
        cold: '#0066ff',
        black: {
          DEFAULT: '#000000',
          pure: '#000000',
          soft: '#050505',
          card: '#0a0a0a',
        },
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60L0 60L0 0' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/svg%3E\")",
        'radial-spotlight': 'radial-gradient(circle at center, var(--tw-gradient-from) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backdropBlur: {
        '2xl': '40px',
      }
    },
  },
  plugins: [],
}
