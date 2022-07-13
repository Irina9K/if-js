import { API_URL, PATH_FOR_HOTELS_POPULAR } from './api.js';

const start = document.querySelector('.main__homes');
const elementHomes = start.lastElementChild.lastElementChild;

async function getPopularHotels() {
  const response = await fetch(`${API_URL}/${PATH_FOR_HOTELS_POPULAR}`);
  const result = await response.json();
  function bubbleSort() {
    for (let i = 0, endI = result.length - 1; i < endI; i += 1) {
      for (let j = 0, endJ = endI - i; j < endJ; j += 1) {
        if (result[j].name > result[j + 1].name) {
          const swap = result[j].name;
          result[j].name = result[j + 1].name;
          result[j + 1].name = swap;
        }
      }
    }
    return result;
  }
  bubbleSort(result);
  sessionStorage.setItem('key', 'result');
  return result;
}

async function showInfScreen() {
  const hotels = await getPopularHotels();

  hotels.forEach((item) => {
    const figure = document.createElement('figure');
    figure.className = 'main__homes--element';
    figure.setAttribute('id', item.id);
    elementHomes.appendChild(figure);

    const img = document.createElement('img');
    img.setAttribute('src', item.imageUrl);
    img.style.width = `${296}px`;
    img.style.height = `${296}px`;
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
    figcaption.append(countryName);
  });
  sessionStorage.setItem('key', JSON.stringify(hotels));
}

function sessionRecord() {
  if (sessionStorage.getItem('key') === null) {
    showInfScreen();
    return;
  }
  const session = JSON.parse(sessionStorage.getItem('key'));
  session.forEach((item) => {
    const figure = document.createElement('figure');
    figure.className = 'main__homes--element';
    figure.setAttribute('id', item.id);
    elementHomes.appendChild(figure);

    const img = document.createElement('img');
    img.setAttribute('src', item.imageUrl);
    img.style.width = `${296}px`;
    img.style.height = `${296}px`;
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
    figcaption.append(countryName);
  });
}

sessionRecord();
