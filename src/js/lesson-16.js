import { API_URL, PATH_FOR_HOTELS } from './api.js';

const startShow = document.querySelector('.main__free');
const elementFree = startShow.lastElementChild.lastElementChild;

function removeChildren() {
  const wrapperElements = document.querySelector('.main__free--hotel');

  while (wrapperElements.firstChild) {
    wrapperElements.removeChild(wrapperElements.firstChild);
  }
}

function createBlockError(errorInf) {
  document.querySelector('.main__container--free').style.display = 'block';
  const divError = document.createElement('div');
  divError.className = 'free__error';
  elementFree.appendChild(divError);

  const pError = document.createElement('p');
  pError.className = 'error__text';
  // pError.textContent = 'Please enter destination or hotel name.';
  pError.textContent = errorInf;
  divError.appendChild(pError);
}

function showAvailableHotels(searchPlace, searchPlaceResult) {
  if (searchPlace) {
    removeChildren();
  }

  if (searchPlace === '') {
    removeChildren();
    createBlockError('Please enter destination or hotel name');
    return;
  }

  if (searchPlaceResult.length === 0) {
    createBlockError('Please enter destination or hotel name');
    return;
  }

  searchPlaceResult.forEach((item) => {
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

async function getRequest(searchPlace, adultsNumber, yearOld, roomsNumber) {
  const response = await fetch(
    `${API_URL}/${PATH_FOR_HOTELS}=${searchPlace}&adults=${adultsNumber}&children=${yearOld}&rooms=${roomsNumber}`,
  );
  const result = await response.json();
  console.log(response);
  return result;
}

async function clickSearchAll() {
  const searchPlace = document.querySelector('.header__choice--city').value.trim().toLowerCase();
  const adultsNumber = document.querySelector('.add__first').textContent.split(' ')[0];
  const roomsNumber = document.querySelector('.add__third').textContent.split(' ')[1];
  const wrapperSelect = document.querySelector('.wrapper__select').children.length;
  const childrenNumber = document.querySelector('.add__second').textContent.split(' ')[1];

  if (!searchPlace && !adultsNumber && roomsNumber === undefined) {
    removeChildren();
    createBlockError(
      'Please enter your destination or hotel name and select the number of people and rooms',
    );
    return;
  }

  if (!+adultsNumber && +childrenNumber >= 1) {
    removeChildren();
    createBlockError('Children cannot ride without adults');
    return;
  }

  if (wrapperSelect === 1) {
    const yearOld = document.querySelector('select').value.split(' ')[0];
    const searchPlaceResult = await getRequest(searchPlace, adultsNumber, yearOld, roomsNumber)
    showAvailableHotels(searchPlace, searchPlaceResult);
    return;
  }

  if (wrapperSelect > 1) {
    const arrWrapperSelect = document.querySelector('.wrapper__select').childNodes;
    const yearOld = [];

    arrWrapperSelect.forEach((item) => {
      const itemYearOld = item.value.split(' ')[0];
      yearOld.push(itemYearOld);
      return yearOld;
    });

    const searchPlaceResult = await getRequest(searchPlace, adultsNumber, yearOld, roomsNumber);
    showAvailableHotels(searchPlace, searchPlaceResult);
  }
}

document.querySelector('.header__button').onclick = clickSearchAll;
