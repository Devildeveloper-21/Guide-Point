function toggleLike(id, event) {
  event.stopPropagation();

  if (!isLoggedIn) {
    alert("Login required");
    openModal("auth-modal");
    return;
  }

  likedIds = likedIds.includes(id)
    ? likedIds.filter((i) => i !== id)
    : [...likedIds, id];

  localStorage.setItem("likes", JSON.stringify(likedIds));
  renderCities();
}
