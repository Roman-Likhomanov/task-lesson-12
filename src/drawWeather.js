export function drawWeather(el, data) {
  if (el.querySelector("div")) {
    const div = el.querySelector("div");
    const h1 = div.querySelector("h1");
    h1.innerText = data.name;
    const h2 = div.querySelector("h2");
    h2.innerText = `${Math.round(data.main.temp - 273.15)}℃`;
    const icon = div.querySelector("img");
    icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  } else {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.innerText = data.name;
    const h2 = document.createElement("h2");
    h2.innerText = `${Math.round(data.main.temp - 273.15)}℃`;
    const icon = document.createElement("img");
    icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(icon);
    el.appendChild(div);
  }
}
