let pages = 0;
let currentPage = 1;

export function generatePagination(data, dataPerPage, productType) {
  pages = Math.trunc(data.length / dataPerPage);
  if (data.length % dataPerPage > 0) {
    pages += 1;
  }
  const paginationContainer = document.getElementsByClassName("pagination")[0];
  paginationContainer.innerHTML = "";
  let pagesHTML =
    '<li class="page-item disabled"><a class="page-link">Previous</a></li>';
  for (let i = 0; i < pages; i++) {
    if (i == 0) {
      pagesHTML += `<li class="page-item active"><a class="page-link">${
        i + 1
      }</a></li>`;
    } else {
      pagesHTML += `<li class="page-item"><a class="page-link">${
        i + 1
      }</a></li>`;
    }
  }
  pagesHTML += '<li class="page-item"><a class="page-link">Next</a></li>';
  paginationContainer.insertAdjacentHTML("beforeend", pagesHTML);
  
  paginate(data, dataPerPage, productType);
}

function paginate(data, dataPerPage, productType) {
  const pageItems = [...document.getElementsByClassName("page-item")];
  pageItems.forEach((page) => {
    page.addEventListener("click", () => {
      if (page.textContent == "Previous") {
        if (currentPage - 1 < 1) {
          return;
        }
        currentPage = currentPage - 1;
      } else if (page.textContent == "Next") {
        if (+currentPage + 1 > pages) {
          return;
        }
        currentPage = +currentPage + 1;
      } else {
        currentPage = page.textContent;
      }
      const prods = dataPerPage * (currentPage - 1);
      setActive(pageItems, currentPage);
      renderProducts(data, prods, prods + dataPerPage, productType);
    });
  });
}

function checkBtnDisable(page) {
  const pageItems = document.getElementsByClassName("page-item");
  if (page == 1) {
    pageItems[0].classList.add("disabled");
    pageItems[pageItems.length - 1].classList.remove("disabled");
  } else if (pages == page) {
    pageItems[0].classList.remove("disabled");
    pageItems[pageItems.length - 1].classList.add("disabled");
  } else {
    if (page !== "Previous" && page !== "Next") {
      pageItems[0].classList.remove("disabled");
      pageItems[pageItems.length - 1].classList.remove("disabled");
    }
  }
}

function setActive(pages) {
  checkBtnDisable(currentPage);
  pages.forEach((page) => {
    if (page.textContent == currentPage) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  });
}

export function renderProducts(products, from, to, productType) {
  const product_parent = document.getElementsByClassName("product_parent")[0];
  product_parent.innerHTML = "";
  let product_parentHTML = "";

  products.slice(from, to).forEach((product) => {
    product_parentHTML += `
        <div class="product">
          <div >
            <img src="${product.img}" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <b class="card-text">${product.price}$</b>
                <button class="btn btn-primary"><i class="fa-solid fa-coins"></i> Buy</button>
                ${productType === undefined ? `<button id="${product.title}" class="btn btn-primary add-to-favorites"><i class="fa-solid fa-star"></i> Add to favorites</button>` : `<button id="${product.title}" class="btn btn-danger remove-from-favorites"><i class="fa-solid fa-ban"></i> Remove from favorites</button>`}
            </div>
          </div>
        </div>
        `;
  });

  product_parent.insertAdjacentHTML("beforeend", product_parentHTML);
}
