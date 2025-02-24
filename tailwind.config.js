module.exports = {
  content: [
    "./index.html",         // ✅ Main HTML file
    "./_layouts/**/*.html", // ✅ Jekyll layouts
    "./_includes/**/*.html", // ✅ Jekyll includes
    "./src/**/*.{html,js}", // ✅ Custom HTML & JS
    "./dist/**/*.css",      // ✅ Ensure it scans compiled CSS
    "./_site/**/*.html",    // ✅ Jekyll generated output
    "./**/*.md"            // ✅ Markdown files (if used in Jekyll)
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",  // Soft Blue (Tailwind blue-500)
        secondary: "#2563EB", // Darker Blue (blue-600)
        background: "#F9FAFB", // Light Gray (gray-100)
        text: "#1E293B", // Dark Gray (gray-800)
        accent: "#93C5FD", // Light Blue Accent (blue-300)
      },
      spacing: {
        'progress-margin': '4px', // Adjust spacing under progress bars
      },
      borderRadius: {
        'progress': '6px', // Ensure smooth rounded edges
      },
      height: {
        'progress-bar': '6px', // Make progress bars thinner
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
