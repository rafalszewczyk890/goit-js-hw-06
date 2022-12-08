const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("ul");

ingredients.forEach((ingredient) => {
  const newElem = document.createElement("li");
  newElem.textContent = ingredient;
  newElem.classList.add("item");
  ingredientsList.append(newElem);
});
