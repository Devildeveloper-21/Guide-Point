const scripts = [
  "src/data.js",
  "src/search.js",
  "src/modal.js",
  "src/render.js",
  "src/likes.js",
  "src/auth.js",
  "src/admin.js",
];

function loadScripts(index = 0) {
  if (index >= scripts.length) {
    renderCities();
    updateUI();
    return;
  }

  const script = document.createElement("script");
  script.src = scripts[index];
  script.onload = () => loadScripts(index + 1);
  document.body.appendChild(script);
}

loadScripts();
