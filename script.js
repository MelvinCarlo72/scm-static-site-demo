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

// --- Eye-Catching Rainbow Title Effect ---
(function rainbowEffect() {
  const title = document.querySelector("h1");
  if (!title) return;

  const colors = ["#ff4d4d", "#ff884d", "#ffe04d", "#4dff4d", "#4dffff", "#4d79ff", "#b84dff"];
  let index = 0;

  setInterval(() => {
    title.style.color = colors[index];
    index = (index + 1) % colors.length;
  }, 600);
})();
