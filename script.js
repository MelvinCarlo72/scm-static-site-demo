// Exportable function for Jest testing
export function greet(name = "Developer") {
  return `Hello, ${name}! Your CI/CD pipeline works.`;
}

// --- UI Setup ---
const greetEl = document.getElementById("greet");
const btn = document.getElementById("btn");

if (greetEl) {
  greetEl.textContent = greet();
}

if (btn) {
  btn.addEventListener("click", () => {
    alert("Button clicked. Lint passed. Deployed via GitHub Actions.");
  });
}

// --- Gradient Glow Title Effect ---
(function gradientGlow() {
  const title = document.querySelector("h1");
  if (!title) return;

  // Apply gradient + glow
  title.style.background = "linear-gradient(90deg, #ff4d4d, #ff884d, #ffe04d, #4dff4d, #4dffff, #4d79ff, #b84dff)";
  title.style.backgroundSize = "400% 400%";
  title.style.webkitBackgroundClip = "text";
  title.style.webkitTextFillColor = "transparent";
  title.style.animation = "gradientShift 6s ease infinite";
  title.style.textShadow = "0 0 12px rgba(255,255,255,0.6), 0 0 25px rgba(255,255,255,0.4)";
})();

