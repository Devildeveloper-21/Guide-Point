function handleAddCity(e) {
  e.preventDefault();

  const attractions = [];
  const attrRaw = document.getElementById("city-attractions").value;

  if (attrRaw.trim()) {
    attrRaw.split("\n").forEach((line) => {
      const parts = line.split("|");
      attractions.push({
        name: parts[0].trim(),
        img: parts[1]?.trim(),
        desc: parts[2]?.trim() || "",
      });
    });
  }

  const hotels = document
    .getElementById("city-hotels")
    .value.split(",")
    .map((h) => {
      const parts = h.split("|");
      return {
        name: parts[0].trim(),
        rating: parts[1] ? parseFloat(parts[1]) : 4.5,
      };
    });

  cities.push({
    id: Date.now(),
    name: city - name.value,
    image: city - image.value,
    desc: city - desc.value,
    hotels,
    attractions,
  });

  localStorage.setItem("cities", JSON.stringify(cities));
  renderCities();
  closeModal("admin-modal");
  e.target.reset();
  alert("City Added Successfully!");
}
