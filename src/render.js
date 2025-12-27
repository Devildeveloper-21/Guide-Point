// Rendering Logic
import { cities, likedIds } from "./data.js";
import { openModal, openImageModal } from "./modal.js";

export function renderCities() {
  const grid = document.getElementById("city-grid");
  if (!grid) return;

  grid.innerHTML = "";

  let displayCities = [...cities];
  const sortType = document.getElementById("sort-select").value;

  // Sorting Logic
  if (sortType === "name") {
    displayCities.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortType === "likes") {
    displayCities.sort((a, b) => {
      const aLiked = likedIds.includes(a.id);
      const bLiked = likedIds.includes(b.id);
      return aLiked === bLiked ? 0 : aLiked ? -1 : 1;
    });
  } else {
    displayCities.sort((a, b) => a.id - b.id);
  }

  // Generate HTML
  displayCities.forEach((city) => {
    const isLiked = likedIds.includes(city.id);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <button class="like-btn ${
          isLiked ? "liked" : ""
        }" onclick="window.toggleLike(${city.id}, event)">
            <i class="fas fa-heart"></i>
        </button>
        <img src="${city.image}" alt="${city.name}">
        <div class="card-content" onclick="window.showDetails(${city.id})">
            <div class="card-title">${city.name}</div>
            <div class="card-desc-short">${city.desc}</div>
        </div>`;
    grid.appendChild(card);
  });

  filterCities(); // Re-apply search filter
}

export function filterCities() {
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

  const noResults = document.getElementById("no-results");
  if (noResults) noResults.style.display = hasVisible ? "none" : "block";
}

export function showDetails(id) {
  const city = cities.find((c) => c.id === id);
  if (!city) return;

  document.getElementById("modal-img").src = city.image;
  document.getElementById("modal-title").innerText = city.name;
  document.getElementById("modal-desc").innerText = city.desc;

  // Map
  const mapQuery = encodeURIComponent(city.name);
  document.getElementById(
    "modal-map"
  ).src = `https://maps.google.com/maps?q=${mapQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  // Attractions
  const attrDiv = document.getElementById("modal-attractions");
  attrDiv.innerHTML = "";
  if (city.attractions && city.attractions.length > 0) {
    city.attractions.forEach((attr) => {
      const card = document.createElement("div");
      card.className = "attraction-card";
      card.innerHTML = `
                <img src="${attr.img}" class="attraction-img">
                <div class="attraction-info">
                    <div class="attraction-name">${attr.name}</div>
                    <div class="attraction-desc">${attr.desc}</div>
                </div>
            `;
      // Add click listener programmatically or via window global if preferred
      card.querySelector("img").onclick = () => openImageModal(attr.img);
      attrDiv.appendChild(card);
    });
  } else {
    attrDiv.innerHTML =
      "<p style='grid-column:1/-1; color:#999; font-size:0.9rem;'>No specific attractions added.</p>";
  }

  // Hotels
  const hotelsDiv = document.getElementById("modal-hotels");
  hotelsDiv.innerHTML = "";
  (city.hotels || []).forEach((h) => {
    const div = document.createElement("div");
    div.className = "list-item";

    let name = h;
    let rating = 4.5;

    if (typeof h === "object") {
      name = h.name;
      rating = h.rating;
    }

    div.innerHTML = `<span>${name}</span> <small style="color:#f59e0b"><i class="fas fa-star"></i> ${rating}</small>`;
    hotelsDiv.appendChild(div);
  });

  openModal("details-modal");
}
