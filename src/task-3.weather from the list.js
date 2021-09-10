(async function () {
  // Указатели на нужные элементы
  const form = document.querySelector("form");
  const listEl = document.querySelector("#list");
  const weatherInfoEl = document.querySelector("#weatherInfo");

  function drawWeather(el, data) {
    const div = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.innerText = data.name;

    const h2 = document.createElement("h2");
    h2.innerText = data.main.temp;

    const icon = document.createElement("img");
    icon.src =
      `http://openweathermap.org/img/wn/${  data.weather[0].icon  }@2x.png`;

    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(icon);
    el.appendChild(div);
  }

  const response = await fetch("https://get.geojs.io/v1/ip/geo.json");
  const jsonData = await response.json();
  const cityName = jsonData.city;

  async function getWeather(city) {
    const apiKey = "feeab8e8e1e7b8d68fab64472693b6f7";
    const response2 = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    return await response2.json();
  }

  const jsonData2 = await getWeather(cityName);
  drawWeather(weatherInfoEl, jsonData2);

  const key = "key";

  async function readList() {
    const result = localStorage.getItem(key);
    if (result === null) {
      return [];
    }
    return JSON.parse(result);
  }

  function saveList(items) {
    localStorage.setItem(key, JSON.stringify(items));
  }

  // Отрисовывает список
  function drawList(el, items) {
    el.innerHTML = `<ol>${items.map((el) => `<li>${el}</li>`).join("")}</ol>`;
  }

  // Читаем список при старте
  const items = await readList();

  // Отрисовываем список
  drawList(listEl, items);

  form.addEventListener("submit", async (ev) => {
    // Чтобы не перезагружать страницу
    ev.preventDefault();
    // Читаем значение из формы
    const formElement = ev.target;
    const input = formElement.querySelector("input");
    const cityName2 = input.value;
    input.value = "";
    // Добавляем элемент в список
    items.push(cityName2);
    // Обновляем список
    if (items.length > 10) {
      items.shift();
    }
    drawList(listEl, items);
    // Сохраняем список
    saveList(items);

    const weather = await getWeather(cityName2);
    drawWeather(weatherInfoEl, weather);
  });

  listEl.addEventListener("click", async (ev) => {
    if (ev.target.tagName === "LI") {
      const cityName3 = ev.target.innerText;
      const weather2 = await getWeather(cityName3);
      drawWeather(weatherInfoEl, weather2);
      // createNewMap(container, weatherByCityName, true);
    }
  });
  // localStorage.clear()
})();
