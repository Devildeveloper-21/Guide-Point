// Authentication Logic
import { openModal, closeModal } from "./modal.js";

export let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

export function updateUI() {
  const s = isLoggedIn ? "remove" : "add";
  const i = isLoggedIn ? "add" : "remove";

  document.getElementById("btn-login").classList[i]("hidden");
  document.getElementById("btn-logout").classList[s]("hidden");
  document.getElementById("btn-admin").classList[s]("hidden");
}

export function handleLogin(e) {
  e.preventDefault();
  isLoggedIn = true;
  localStorage.setItem("isLoggedIn", "true");
  updateUI();
  closeModal("auth-modal");
}

export function logout() {
  isLoggedIn = false;
  localStorage.setItem("isLoggedIn", "false");
  updateUI();
}
