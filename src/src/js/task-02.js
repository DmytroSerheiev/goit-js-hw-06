const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = ingredient;
  console.log(liEl);
  ulEl.appendChild(liEl);
});
