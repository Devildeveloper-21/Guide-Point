function openModal(id) {
  document.getElementById(id).classList.add("active");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}

function openImageModal(src) {
  document.getElementById("full-image").src = src;
  openModal("image-modal");
}

function closeImageModal(e) {
  if (
    e.target.id === "image-modal" ||
    e.target.classList.contains("close-modal")
  ) {
    closeModal("image-modal");
  }
}
