import { getProductList } from "../product.api.js";

window.addEventListener("load", async () => {
  const products = await getProductList();

  const tours = document.getElementsByClassName("tours")[0];
  let toursHTML = "";

  console.log(products);

  products.forEach((product) => {
    toursHTML += `
        <div class="tours">
            <div class="tours_parent">
                <div class="travel_img">
                    <img src="${product.collageImg}" alt="">
                </div>
            </div>
            <div class="tours_text">
                <h1>${product.title}<img src="${product.flag}" alt=""></h1>
                <h2>The price includes:</h2>
                <li>${product.li1}</li>
                <li>${product.li2}</li>
                <li>${product.li3}</li>
                <li>${product.li4}</li>
                <li>${product.li5}</li>
                ${product.li6 ? `<li>${product.li6}</li>` : ""}
                <p><i class="fa-solid fa-clock"></i> ${product.time}</p>
                <div class="tour_buy">
                    <div>
                        <p>${product.price}$</p>
                    </div>
                    <div>
                        <button><i class="fa-solid fa-sack-dollar"></i> Buy</button>
                    </div>
                    <div>
                        <a href="../contact/index.html"><button><i class="fa-solid fa-address-card"></i> Contact</button></a>
                    </div>
                </div>
            </div>
        </div>
        `;
  });

  console.log(toursHTML);

  tours.insertAdjacentHTML("afterend", toursHTML);
});
