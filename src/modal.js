// Modal Logic

export function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add("active");
}

export function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove("active");
}

export function openImageModal(src) {
  const fullImage = document.getElementById("full-image");
  if (fullImage) {
    fullImage.src = src;
    openModal("image-modal");
  }
}

export function closeImageModal(e) {
  // Close if clicking background or the X button
  if (
    e.target.id === "image-modal" ||
    e.target.classList.contains("close-modal")
  ) {
    closeModal("image-modal");
  }
}
