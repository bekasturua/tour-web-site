import {renderProducts,generatePagination } from "../pagination/pagination.js";



export function search(products) {
    const searchInp =  document.getElementById('search');
    searchInp.addEventListener('keyup', (ev) => {
        const searchValue = searchInp.value;
        const filtered = products.filter(p => p.title.toLowerCase().includes(searchValue.toLowerCase()));
        renderProducts(filtered, 0, 8);
        generatePagination(filtered, 8);
    });
 }

 