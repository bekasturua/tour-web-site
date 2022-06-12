import { getProductList } from "../product.api.js";
import {
  generatePagination,
  renderProducts,
} from "../modules/pagination/pagination.js";
import { search } from "../modules/search/search.js";
import { filter} from "../modules/filter/filter.js";
import { addToFavoritesListener} from "../modules/addToFavorites/favorites.js";

window.addEventListener("load", async () => {
  const products = await getProductList();
  generatePagination(products, 8);

  renderProducts(products, 0, 8);

  search(products);

  filter(products);

  addToFavoritesListener(products)
});




