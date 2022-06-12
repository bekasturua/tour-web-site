import { getInternalCountriesList } from "../product.api.js";
import { getExternalCountriesList } from "../product.api.js";

function margeCountriesInfo(internalCountriesInfo, externalCountriesList) {
  for (let i = 0; i < internalCountriesInfo.length; i++) {
    const extendedInfo = getExtendedCounrtyInfo(
      internalCountriesInfo[i].name,
      externalCountriesList
    );
    internalCountriesInfo[i].flag = extendedInfo.flags.svg;
    internalCountriesInfo[i].population = extendedInfo.population;
    internalCountriesInfo[i].currency = `${
      Object.values(extendedInfo.currencies)[0].name
    } (${Object.values(extendedInfo.currencies)[0].symbol})`;
    internalCountriesInfo[i].capital = extendedInfo.capital;
  }
  return internalCountriesInfo;
}

function getExtendedCounrtyInfo(name, externalCountriesList) {
  for (let j = 0; j < externalCountriesList.length; j++) {
    const countryName = Object.values(externalCountriesList[j].name)[0];
    if (countryName === name) {
      return externalCountriesList[j];
    }
  }
}

window.addEventListener("load", async () => {
  const internalCountriesInfo = await getInternalCountriesList();
  const externalCountriesList = await getExternalCountriesList();

  const fullCounrtiesInfo = margeCountriesInfo(
    internalCountriesInfo,
    externalCountriesList
  );

  renderCountries(fullCounrtiesInfo);



  const searchInp = document.getElementById("search");
  searchInp.addEventListener("keyup", (ev) => {
    const searchValue = searchInp.value;
    const filtered = fullCounrtiesInfo.filter((p) =>
      p.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    renderCountries(filtered);
  });


});


function renderCountries(fullCounrtiesInfo) {
  const countries = document.getElementsByClassName("country_parent")[0];
  countries.innerHTML = "";
  let countriesHTML = "";

  fullCounrtiesInfo.forEach((country) => {
    countriesHTML += `
        <div class="Countries">
            <div class="Countries_parent">
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="${country.firstImg}"  alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="${country.secondImg}"  alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="${country.thirdImg}"  alt="...">
                      </div>
                    </div>
                  </div>
            </div>
            <div class="Countries_text">
                <h1 id="name">${country.name}</h1>
                <img id="flag"  src="${country.flag}" alt="">
                <h3 id="capital"> Capital: ${country.capital}</h2>
                <h3 id="population">Population: ${country.population}</h3>
                <h3 id="currency">Currency: ${country.currency}</h3>
                <h4>${country.description}</h3>
    
            </div>
        </div>
        `;
  });


  countries.insertAdjacentHTML("beforeend", countriesHTML);
}