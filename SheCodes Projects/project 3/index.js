function searchCity(event) {
  event.preventDefault();

  let searchInput = document.querySelector(".search-input");
  let currentCity = document.querySelector("h1");
  if (searchInput.value) {
    currentCity.innerHTML = `${searchInput.value}`;
  } else {
    currentCity.innerHTML = null;
    alert("Enter city");
  }

  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let time = `${hours}:${minutes}`;

  let paragraph = document.querySelector("p");
  paragraph.textContent = paragraph.textContent.replace(
    "Saturday 15:32",
    `${day} ${time}`
  );
}

let form = document.querySelector("form");
form.addEventListener("submit", searchCity);
