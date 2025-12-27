// Admin Logic
import { addNewCityToState } from "./data.js";
import { renderCities } from "./render.js";
import { closeModal } from "./modal.js";

export function handleAddCity(e) {
  e.preventDefault();

  // Parse Attractions
  const attrRaw = document.getElementById("city-attractions").value;
  const attractions = [];
  if (attrRaw.trim()) {
    attrRaw.split("\n").forEach((line) => {
      const parts = line.split("|");
      if (parts.length >= 2) {
        attractions.push({
          name: parts[0].trim(),
          img: parts[1].trim(),
          desc: parts[2] ? parts[2].trim() : "",
        });
      }
    });
  }

  // Parse Hotels
  const hotelRaw = document.getElementById("city-hotels").value;
  const hotels = hotelRaw.split(",").map((h) => {
    const parts = h.split("|");
    return {
      name: parts[0].trim(),
      rating: parts[1] ? parseFloat(parts[1].trim()) : 4.5,
    };
  });

  const newCity = {
    id: Date.now(),
    name: document.getElementById("city-name").value,
    image: document.getElementById("city-image").value,
    desc: document.getElementById("city-desc").value,
    hotels: hotels,
    attractions: attractions,
  };

  addNewCityToState(newCity);
  renderCities();
  closeModal("admin-modal");
  e.target.reset();
  alert("City Added Successfully!");
}
