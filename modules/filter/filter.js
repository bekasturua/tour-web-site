import {
  renderProducts,
  generatePagination,
} from "../pagination/pagination.js";

export function filter(products) {
  const filterBtn = document.getElementsByClassName("filter_btn")[0];
  filterBtn.addEventListener("click", () => {
    const inputFrom = document.getElementsByClassName("form-control-from")[0].value;
    const inputTo = document.getElementsByClassName("form-control-to")[0].value;
    let filtered = [];
    if (inputFrom && !inputTo) {
      filtered = products.filter((pr) => {
        return Number(pr.price) >= Number(inputFrom);
      });
    } else if (!inputFrom && inputTo) {
      filtered = products.filter((pr) => {
        return Number(pr.price) <= Number(inputTo);
      });
    } else {
      filtered = products.filter((pr) => {
        return Number(pr.price) >= Number(inputFrom) && Number(pr.price) <= Number(inputTo);
      });
    }
    renderProducts(filtered, 0, 8);
    generatePagination(filtered, 8);
  });
}
