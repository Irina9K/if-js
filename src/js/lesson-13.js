const startShow = document.querySelector('.main__free');
const elementFree = startShow.lastElementChild.lastElementChild;

const API_URL = 'https://fe-student-api.herokuapp.com/api';
const PATH_FOR_HOTELS = 'hotels';

const url = 'https://fe-student-api.herokuapp.com/api/hotels?search=us';
async function getPlaces(searchString) {
  const response = await fetch(`${API_URL}/${PATH_FOR_HOTELS}?=${searchString}`);
  const result = await response.json();
  return result;
}

getPlaces(url);

async function clickSearch() {
  const strForSearch = document.querySelector('.header__choice--city').value.trim().toLowerCase();
  const searchResult = await getPlaces(strForSearch);

  searchResult.forEach((item) => {
    const hasCountry = strForSearch === item.country.toLowerCase();
    const hasCity = strForSearch === item.city.toLowerCase();
    const hasHotel = strForSearch === item.name.toLowerCase();

    if (hasCountry || hasCity || hasHotel) {
      const figure = document.createElement('figure');
      figure.className = 'main__free--element';
      figure.setAttribute('id', item.id);
      elementFree.appendChild(figure);

      const img = document.createElement('img');
      img.setAttribute('src', item.imageUrl);
      img.style.width = `${350}px`;
      img.style.height = `${350}px`;
      figure.appendChild(img);

      const figcaption = document.createElement('figcaption');
      figcaption.className = 'main__name--img';
      figure.appendChild(figcaption);

      const hotelName = document.createElement('a');
      hotelName.setAttribute('href', '#');
      hotelName.className = 'nav__link--country';
      hotelName.innerHTML = item.name;
      figcaption.appendChild(hotelName);

      const countryName = document.createElement('a');
      countryName.setAttribute('href', '#');
      countryName.className = 'main__name--country';
      countryName.innerHTML = `${item.city}  ${item.country}`;
      figcaption.appendChild(countryName);
    }
    // if(strForSearch ===''){
    // alert('enter name')
    // }
  });
}

document.querySelector('.header__button').onclick = clickSearch;

//
// function searchName(enterString) {
//   const enterStringLower = enterString.toLowerCase();
//   for (let i = 0; i < data.length; i += 1) {
//     const hasCountry = enterStringLower === data[i].country.toLowerCase();
//     const hasCity = enterStringLower === data[i].city.toLowerCase();
//
//     if (hasCountry || hasCity) {
//       console.log(data[i]);
//     }
//   }
// }
