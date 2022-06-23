export async function getProductList() {
  const res = await fetch(
    "https://easytravel-d1779-default-rtdb.firebaseio.com/products.json"
  );
  const products = await res.json();
  return products;
}

export async function getInternalCountriesList() {
  const res = await fetch(
    "https://easytravel-d1779-default-rtdb.firebaseio.com/countriesInfo.json"
  );
  const countriesInfo = await res.json();
  return countriesInfo;
}

export async function getExternalCountriesList() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countriesInfo = await res.json();
  return countriesInfo;
}
