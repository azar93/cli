/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B5CF6',
          light: '#C4B5FD',
        },
        secondary: {
          DEFAULT: '#6366F1',
          light: '#A5B4FC',
        },
        accent: '#4F46E5',
        text: {
          primary: '#1E293B',
          secondary: '#475569',
        },
        background: {
          DEFAULT: '#FFFFFF',
          dark: '#F5F3FF',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #C4B5FD 0%, #A5B4FC 100%)',
        'gradient-background': 'linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%)',
      },
    },
  },
  plugins: [],
} 