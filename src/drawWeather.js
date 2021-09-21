export function drawWeather(el, data) {
  if (document.querySelectorAll(".h1")) {
    document.querySelectorAll(".h1").forEach((e) => e.remove());
  }

  if (document.querySelectorAll(".h2")) {
    document.querySelectorAll(".h2").forEach((e) => e.remove());
  }

  if (document.querySelectorAll(".icon")) {
    document.querySelectorAll(".icon").forEach((e) => e.remove());
  }

  const div = document.createElement("div");

  const h1 = document.createElement("h1");
  h1.innerText = data.name;

  const h2 = document.createElement("h2");
  h2.innerText = `${Math.round(data.main.temp - 273.15)}℃`;

  const icon = document.createElement("img");
  icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  div.appendChild(h1);
  h1.classList.add("h1");
  div.appendChild(h2);
  h2.classList.add("h2");
  div.appendChild(icon);
  icon.classList.add("icon");
  el.appendChild(div);
}
