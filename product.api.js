export async function getProductList() {
    const res = await fetch('http://localhost:3000/products');
    const products = await res.json();
    return products;
}

export async function getInternalCountriesList() {
    const res = await fetch('http://localhost:3000/countriesInfo');
    const countriesInfo = await res.json();
    return countriesInfo;
}
  
export async function getExternalCountriesList() {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const countriesInfo = await res.json();
    return countriesInfo;
}