// Data and State Management

const defaultCities = [
  {
    id: 1,
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600",
    desc: "The city of lights, known for its cafe culture, fashion, and art.",
    hotels: [
      { name: "Ritz Paris", rating: 4.9 },
      { name: "Hilton Opera", rating: 4.6 },
    ],
    attractions: [
      {
        name: "Eiffel Tower",
        img: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=400",
        desc: "Famous iron lady of Paris.",
      },
      {
        name: "Louvre Museum",
        img: "https://images.unsplash.com/photo-1499856871940-a09627c6dcf6?w=400",
        desc: "Home of the Mona Lisa.",
      },
    ],
  },
  {
    id: 2,
    name: "Goa, India",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600",
    desc: "Tropical paradise with beaches and nightlife.",
    hotels: [
      { name: "Taj Exotica", rating: 4.8 },
      { name: "W Goa", rating: 4.5 },
    ],
    attractions: [
      {
        name: "Baga Beach",
        img: "https://images.unsplash.com/photo-1548021682-1720ed403a5b?w=400",
        desc: "Popular beach for water sports.",
      },
      {
        name: "Fort Aguada",
        img: "https://images.unsplash.com/photo-1590495133606-5b62b083c749?w=400",
        desc: "17th-century Portuguese fort.",
      },
    ],
  },
];

// State Variables
export let cities = JSON.parse(localStorage.getItem("cities")) || defaultCities;
export let likedIds = JSON.parse(localStorage.getItem("likes")) || [];

// Save Functions
export const saveCities = () =>
  localStorage.setItem("cities", JSON.stringify(cities));
export const saveLikes = () =>
  localStorage.setItem("likes", JSON.stringify(likedIds));

// Helper to add a city
export const addNewCityToState = (newCity) => {
  cities.push(newCity);
  saveCities();
};

// Helper to toggle like
export const toggleLikeState = (id) => {
  if (likedIds.includes(id)) {
    likedIds = likedIds.filter((i) => i !== id);
  } else {
    likedIds.push(id);
  }
  saveLikes();
};
