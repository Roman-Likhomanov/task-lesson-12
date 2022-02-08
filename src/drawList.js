export function drawList(el, items) {
  el.innerHTML = `<ol>${items.map((el) => `<li>${el}</li>`).join("")}</ol>`;
}
