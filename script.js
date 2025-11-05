(function () {
  const greetEl = document.getElementById("greet");
  const btn = document.getElementById("btn");

  function greet(name = "Developer") {
    return `Hello, ${name}! Your CI/CD pipeline works.`;
  }

  if (greetEl) {
    greetEl.textContent = greet();
  }

  if (btn) {
    btn.addEventListener("click", () => {
      alert("Button clicked. Lint passed. Deployed via GitHub Actions.");
    });
  }

  if (typeof module !== "undefined") {
    module.exports = { greet };
  }
})();
