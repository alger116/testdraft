module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "./admin.html",
    "./login.html",
    "./timeline.html",
    "./profile.html",
    "./settings.html",
    "./register.html",
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./_site/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        mint: "oklch(0.72 0.11 178)",
        primary: "#3B82F6",
        secondary: "#2563EB",
        background: "#F9FAFB",
        text: "#1E293B",
        accent: "#93C5FD",
      },
      spacing: {
        "progress-margin": "4px",
      },
      borderRadius: {
        progress: "6px",
      },
      height: {
        "progress-bar": "6px",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
