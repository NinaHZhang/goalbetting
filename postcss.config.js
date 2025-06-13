export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: {
    
    tailwindcss: {},
    autoprefixer: {},
  },
  safelist: [
    'dashboard', 'betting-room', 'leaderboard', 'my-goals', 'profile', 'active'
  ],
}