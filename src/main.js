// Main Entry Point
import { renderCities, filterCities, showDetails } from "./render.js";
import {
  openModal,
  closeModal,
  closeImageModal,
  openImageModal,
} from "./modal.js";
import { handleLogin, logout, updateUI } from "./auth.js";
import { handleAddCity } from "./admin.js";
import { toggleLike } from "./like.js";
import {formManager} from "./form.js";


// Attach functions to window so HTML onclick attributes can find them
window.renderCities = renderCities;
window.filterCities = filterCities;
window.showDetails = showDetails;
window.openModal = openModal;
window.closeModal = closeModal;
window.closeImageModal = closeImageModal;
window.openImageModal = openImageModal;
window.handleLogin = handleLogin;
window.logout = logout;
window.handleAddCity = handleAddCity;
window.toggleLike = toggleLike;

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  renderCities();
  updateUI();
  formManager();
});
