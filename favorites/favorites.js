import {
  generatePagination,
  renderProducts,
} from "../modules/pagination/pagination.js";
import { search } from "../modules/search/search.js";
import { filter } from "../modules/filter/filter.js";
import { removeFromFavoritesListener } from "../modules/addToFavorites/favorites.js";

window.addEventListener("load", async () => {
  const products = await JSON.parse(localStorage.getItem("products"));
  generatePagination(products, 12, "favorites");

  renderProducts(products, 0, 12, "favorites");

  search(products);

  filter(products);

  removeFromFavoritesListener(products);
});
