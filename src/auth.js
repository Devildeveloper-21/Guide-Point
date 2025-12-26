function handleLogin(e) {
  e.preventDefault();
  isLoggedIn = true;
  localStorage.setItem("isLoggedIn", "true");
  updateUI();
  closeModal("auth-modal");
}

function logout() {
  isLoggedIn = false;
  localStorage.setItem("isLoggedIn", "false");
  updateUI();
}

function updateUI() {
  const s = isLoggedIn ? "remove" : "add";
  const i = isLoggedIn ? "add" : "remove";

  document.getElementById("btn-login").classList[i]("adminView");
  document.getElementById("btn-logout").classList[s]("adminView");
  document.getElementById("btn-admin").classList[s]("adminView");
}
