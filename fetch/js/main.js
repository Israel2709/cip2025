/*async y await*/

const getProducts = async () => {
  let response = await fetch("https://fakestoreapi.com/products", {
    method: "GET",
  });
  console.log(response);
  let products = await response.json();
  console.log(products);
  printProducts(products);
};

getProducts();

const printProducts = (productsArray) => {
  const productsList = document.getElementById("products-list");
  productsArray.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("border", "p-4", "flex", "flex-col");
    const productItemText = product.title;

    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.image);

    productItem.append(productItemText, productImage);
    productsList.append(productItem);
  });
};
