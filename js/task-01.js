const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  console.log(
    "Category: ",
    item.firstElementChild.textContent,
    "\nElements: ",
    item.firstElementChild.nextElementSibling.children.length
  );
});
