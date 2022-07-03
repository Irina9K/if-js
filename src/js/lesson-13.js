const startShow = document.querySelector('.main__free');
const elementFree = startShow.lastElementChild.lastElementChild;

const API_URL = 'https://fe-student-api.herokuapp.com/api';
const PATH_FOR_HOTELS = 'hotels?search';

async function getPlaces(searchString) {
  const response = await fetch(`${API_URL}/${PATH_FOR_HOTELS}=${searchString}`);
  const result = await response.json();
  return result;
}

getPlaces();

async function clickSearch() {
  const strForSearch = document.querySelector('.header__choice--city').value.trim().toLowerCase();
  const searchResult = await getPlaces(strForSearch);
  const wrapperElements = document.querySelector('.main__free--hotel');

  if (strForSearch) {
    while (wrapperElements.firstChild) {
      wrapperElements.removeChild(wrapperElements.firstChild);
    }
  }

  if (strForSearch === '') {
    while (wrapperElements.firstChild) {
      wrapperElements.removeChild(wrapperElements.firstChild);
    }
    document.querySelector('.main__container--free').style.display = 'block';
    const divError = document.createElement('div');
    divError.className = 'free__error';
    elementFree.appendChild(divError);

    const pError = document.createElement('p');
    pError.className = 'error__text';
    pError.textContent = 'Please enter destination or hotel name.';
    divError.appendChild(pError);
    return;
  }

  if (searchResult.length === 0) {
    document.querySelector('.main__container--free').style.display = 'block';
    const divError = document.createElement('div');
    divError.className = 'free__error';
    elementFree.appendChild(divError);

    const pError = document.createElement('p');
    pError.className = 'error__text';
    pError.textContent = 'Please enter destination or hotel name.';
    divError.appendChild(pError);
    return;
  }

  searchResult.forEach((item) => {
    document.querySelector('.main__container--free').style.display = 'block';

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
  });
}

document.querySelector('.header__button').onclick = clickSearch;
