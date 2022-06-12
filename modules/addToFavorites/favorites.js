export function addToFavoritesListener(products) {
  const favoritesButtons = [
    ...document.getElementsByClassName("btn btn-primary add-to-favorites"),
  ];
  favoritesButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const product = products.filter((product) => product.title === btn.id);
      if (localStorage.getItem("products")) {
        const localStorageProducts = JSON.parse(
          localStorage.getItem("products")
        );
        localStorageProducts.push(product[0]);
        localStorage.setItem("products", JSON.stringify(localStorageProducts));
      } else {
        localStorage.setItem("products", JSON.stringify(product));
      }
    });
  });
}

export function removeFromFavoritesListener(products) {
  const favoritesButtons = [
    ...document.getElementsByClassName("btn btn-danger remove-from-favorites"),
  ];
  favoritesButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const product = products.filter((product) => product.title === btn.id);
      if (localStorage.getItem("products")) {
        let localStorageProducts = JSON.parse(localStorage.getItem("products"));
        localStorageProducts = localStorageProducts.filter(
          (p) => p.id !== product[0].id
        );
        localStorage.setItem("products", JSON.stringify(localStorageProducts));
        location.reload();
      }
    });
  });
}
