const startShow = document.querySelector('.main__free');
const elementFree = startShow.lastElementChild.lastElementChild;

const API_URL = 'https://fe-student-api.herokuapp.com/api';
const PATH_FOR_HOTELS = 'hotels?search';

function removeChildren() {
  const wrapperElements = document.querySelector('.main__free--hotel');

  while (wrapperElements.firstChild) {
    wrapperElements.removeChild(wrapperElements.firstChild);
  }
}

function createBlockError() {
  document.querySelector('.main__container--free').style.display = 'block';
  const divError = document.createElement('div');
  divError.className = 'free__error';
  elementFree.appendChild(divError);

  const pError = document.createElement('p');
  pError.className = 'error__text';
  pError.textContent = 'Please enter destination or hotel name.';
  divError.appendChild(pError);
}

async function getPlaces(searchString) {
  const response = await fetch(`${API_URL}/${PATH_FOR_HOTELS}=${searchString}`);
  const result = await response.json();
  return result;
}

getPlaces();

async function clickSearch() {
  const strForSearch = document.querySelector('.header__choice--city').value.trim().toLowerCase();
  const searchResult = await getPlaces(strForSearch);

  if (strForSearch) {
    removeChildren();
  }

  if (strForSearch === '') {
    removeChildren();
    createBlockError();
    return;
  }

  if (searchResult.length === 0) {
    createBlockError();
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
