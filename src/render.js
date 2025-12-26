function renderCities() {
  const grid = document.getElementById("city-grid");
  grid.innerHTML = "";
  let displayCities = [...cities];
  const sortType = document.getElementById("sort-select").value;

  if (sortType === "name")
    displayCities.sort((a, b) => a.name.localeCompare(b.name));
  else if (sortType === "likes") {
    displayCities.sort((a, b) => {
      const aLiked = likedIds.includes(a.id);
      const bLiked = likedIds.includes(b.id);
      return aLiked === bLiked ? 0 : aLiked ? -1 : 1;
    });
  } else {
    displayCities.sort((a, b) => a.id - b.id);
  }

  displayCities.forEach((city) => {
    const isLiked = likedIds.includes(city.id);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <button class="like-btn ${isLiked ? "liked" : ""}" onclick="toggleLike(${
      city.id
    }, event)">
        <i class="fas fa-heart"></i>
      </button>
      <img src="${city.image}">
      <div class="card-content" onclick="showDetails(${city.id})">
        <div class="card-title">${city.name}</div>
        <div class="card-desc-short">${city.desc}</div>
      </div>`;
    grid.appendChild(card);
  });

  filterCities();
}

function showDetails(id) {
  const city = cities.find((c) => c.id === id);

  document.getElementById("modal-img").src = city.image;
  document.getElementById("modal-title").innerText = city.name;
  document.getElementById("modal-desc").innerText = city.desc;

  document.getElementById(
    "modal-map"
  ).src = `https://maps.google.com/maps?q=${encodeURIComponent(
    city.name
  )}&output=embed`;

  const attrDiv = document.getElementById("modal-attractions");
  attrDiv.innerHTML = "";

  (city.attractions || []).forEach((attr) => {
    const card = document.createElement("div");
    card.className = "attraction-card";
    card.innerHTML = `
      <img src="${attr.img}" class="attraction-img" onclick="openImageModal('${attr.img}')">
      <div class="attraction-info">
        <div class="attraction-name">${attr.name}</div>
        <div class="attraction-desc">${attr.desc}</div>
      </div>`;
    attrDiv.appendChild(card);
  });

  const hotelsDiv = document.getElementById("modal-hotels");
  hotelsDiv.innerHTML = "";

  (city.hotels || []).forEach((h) => {
    hotelsDiv.innerHTML += `
      <div class="list-item">
        <span>${h.name || h}</span>
        <small style="color:#f59e0b">
          <i class="fas fa-star"></i> ${h.rating || 4.5}
        </small>
      </div>`;
  });

  openModal("details-modal");
}
