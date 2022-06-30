// document.querySelector('.header__button').onclick = clickSearch;
// const startShow = document.querySelector('.main__free');
// const elementFree = startShow.lastElementChild.lastElementChild;

// const q = fetch('https://fe-student-api.herokuapp.com/api/hotels?search=us')
//     .then((response) => response.json())
//     .then((result) => console.log(result[0].name));
/* eslint-disable */
const url = 'https://fe-student-api.herokuapp.com/api/hotels?search=us';
async function getPlaces(url) {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result[0].country.toLowerCase() === 'russia');
  clickSearch(result);
}

getPlaces(url);

function clickSearch(result) {
  const inputValue = document.querySelector('.header__choice--city').value.trim().toLowerCase();
  console.log(inputValue);
  document.querySelector('.title_free').innerHTML = inputValue;
  console.log(result[0].country);
  console.log(result[0].country === 'Russia');
  console.log(result[0].country === inputValue);
  if (result[0].country === inputValue) {
    console.log('hi');
  } else {
    console.log(result[0].country === 'Russia');
  }
}
document.querySelector('.header__button').onclick = clickSearch;

