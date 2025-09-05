// theme.js

const htmlEl = document.documentElement;
const toggles = document.querySelectorAll(".theme-toggle");

// Apply saved theme or system preference
function applyTheme() {
  const darkPreferred =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  if (darkPreferred) {
    htmlEl.classList.add("dark");
    toggles.forEach((btn) => (btn.textContent = "☀️"));
  } else {
    htmlEl.classList.remove("dark");
    toggles.forEach((btn) => (btn.textContent = "🌙"));
  }
}

// Toggle theme and update all buttons
function toggleTheme() {
  if (htmlEl.classList.contains("dark")) {
    htmlEl.classList.remove("dark");
    localStorage.theme = "light";
    toggles.forEach((btn) => (btn.textContent = "🌙"));
  } else {
    htmlEl.classList.add("dark");
    localStorage.theme = "dark";
    toggles.forEach((btn) => (btn.textContent = "☀️"));
  }
}

// Run on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  toggles.forEach((btn) => btn.addEventListener("click", toggleTheme));
});
