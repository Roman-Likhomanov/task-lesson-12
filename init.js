export function init() {
  const container = document.createElement("div");
  container.classList.add("container");

  const h1 = document.createElement("h1");
  h1.innerText = "Weather in the city:";
  container.append(h1);

  const weatherContainer = document.createElement("div");
  container.append(weatherContainer);
  weatherContainer.classList.add("weather-container");

  const input = document.createElement("input");
  const list = document.createElement("p");
  const button = document.createElement("button");
  button.innerText = "Добавить город";

  const form = document.createElement("form");
  form.append(input);
  form.append(button);
  form.append(list);

  const formContainer = document.createElement("div");
  formContainer.append(form);
  formContainer.classList.add("form-container");

  container.append(formContainer);

  document.body.append(container);
}
