document.getElementById("toggle-theme").onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.getElementById("toggle-theme").src = "assets/Icons/light.webp";
  } else {
    document.body.classList.add("dark-theme");
    document.getElementById("toggle-theme").src = "assets/Icons/dark.webp";
  }
};
let productContainer = document.getElementById("products");
function getProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      let products = "";
      for (let i = 0; i < data.length; i++) {
        products += `
          <div class="product">
            <img src="${data[i].image}" alt="${data[i].title}" width="200">
            <h3>${data[i].title}</h3>
            <p><strong>Price:</strong> $${data[i].price}</p>
            <p><strong>Category:</strong> ${data[i].category}</p>
            <p><strong>Description:</strong> ${data[i].description}</p>
            <p><strong>Rating:</strong> ${data[i].rating.rate} & (${data[i].rating.count} reviews)</p>
          </div>
        `;
      }
      productContainer.innerHTML = products;
    });
}


getProducts();
