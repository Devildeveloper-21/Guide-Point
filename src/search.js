function filterCities() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  let hasVisible = false;

  cards.forEach((card) => {
    const name = card.querySelector(".card-title").innerText.toLowerCase();
    if (name.includes(query)) {
      card.style.display = "block";
      hasVisible = true;
    } else {
      card.style.display = "none";
    }
  });

  document.getElementById("no-results").style.display = hasVisible
    ? "none"
    : "block";
}
