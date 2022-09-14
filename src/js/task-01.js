const categoriesListRef = document.querySelector("#categories");

const firstCategoryRef = document.querySelector(".item");
const firstCategoryTitleRef = firstCategoryRef.firstElementChild;
const firstCategoryListRef = firstCategoryRef.lastElementChild;

const secondCategoryRef = firstCategoryRef.nextElementSibling;
const secondCategoryTitleRef = secondCategoryRef.firstElementChild;
const secondCategoryListRef = secondCategoryRef.lastElementChild;

const thirdCategoryRef = categoriesListRef.lastElementChild;
const thirdCategoryTitleRef = thirdCategoryRef.firstElementChild;
const thirdCategoryListRef = thirdCategoryRef.lastElementChild;

console.log(`Number of categories: ${categoriesListRef.children.length}`);

console.log(`Category: ${firstCategoryTitleRef.textContent}`);
console.log(`Elements: ${firstCategoryListRef.children.length}`);

console.log(`Category: ${secondCategoryTitleRef.textContent}`);
console.log(`Elements: ${secondCategoryListRef.children.length}`);

console.log(`Category: ${thirdCategoryTitleRef.textContent}`);
console.log(`Elements: ${thirdCategoryListRef.children.length}`);
