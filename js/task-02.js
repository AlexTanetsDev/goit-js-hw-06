const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

const ingridientsListItemsRefs = ingredients.map((ingridient) => {
  const ingridientsListItemRef = document.createElement("li");
  ingridientsListItemRef.classList.add("item");
  ingridientsListItemRef.textContent = ingridient;

  return ingridientsListItemRef;
});

ingredientsListRef.append(...ingridientsListItemsRefs);
