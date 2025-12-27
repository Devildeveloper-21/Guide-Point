// Like Logic
import { isLoggedIn, updateUI } from "./auth.js";
import { toggleLikeState } from "./data.js";
import { renderCities } from "./render.js";
import { openModal } from "./modal.js";

export function toggleLike(id, event) {
  event.stopPropagation();

  if (!isLoggedIn) {
    alert("Login required");
    openModal("auth-modal");
    return;
  }

  toggleLikeState(id);
  renderCities();
}
