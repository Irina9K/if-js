import { createSelect, countThings } from './modules/functions.js';
import { getPopularHotels, showInfScreen, sessionRecord } from './modules/showPopularHotels.js';
import { getRequest, clickSearchAll } from './modules/showAvailableHotels.js';

getPopularHotels();
showInfScreen();
sessionRecord();

getRequest();
clickSearchAll();

const formPeopleRoom = document.getElementById('people-room');
const filterContent = document.querySelector('.container__forms--filter');
const hiddenFilter = document.querySelector('.header__button');

hiddenFilter.addEventListener('click', () => {
  if (filterContent.style.display === 'block') {
    filterContent.style.display = 'none';
  }
});

formPeopleRoom.addEventListener('click', () => {
  if (filterContent.style.display === 'none' || '') {
    filterContent.style.display = 'none';
  }
  if (filterContent.style.display === 'block') {
    filterContent.style.display = 'none';
  } else {
    filterContent.style.display = 'block';
  }
});

const showInf = document.querySelector('.wrapper__children--inf');
const addInf = document.querySelector('.fifteen');

addInf.addEventListener('click', () => {
  showInf.style.display = 'block';
});

createSelect();

const input = document.querySelector('.header__choice--people');
input.value = '0 Adults — 0 Children — 0 Room';
input.addEventListener('click', () => {
  input.value = '';
});

const counts = document.querySelectorAll('.filter__item');
counts.forEach(countThings);
