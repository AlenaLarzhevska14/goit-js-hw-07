document.addEventListener("DOMContentLoaded", () => {
  const categoriesItems = document.querySelectorAll("#categories .item");

  console.log(`Number of categories: ${categoriesItems.length}`);

  categoriesItems.forEach((item) => {
    const categoryName = item.firstElementChild.textContent;

    const elementsCount = item.lastElementChild.children.length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsCount}`);
  });
});
