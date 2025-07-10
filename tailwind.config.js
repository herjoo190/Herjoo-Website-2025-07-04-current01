/** @type {import('tailwindcss').Config} */
module.exports = {
  // This content array now explicitly lists all of your HTML files.
  // This is the safest possible change. It tells Tailwind to scan
  // these specific files for classes, without affecting anything else.
  content: [
    "./index.html",
    "./thank-you.html",
    "./privacy-policy.html",
    "./terms-and-conditions.html",
    "./header.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
