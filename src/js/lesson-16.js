import { API_URL, PATH_FOR_HOTELS } from './api.js';

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

  if (wrapperSelect === 1) {
    const yearOld = document.querySelector('select').value.split(' ')[0];
    await getRequest(searchPlace, adultsNumber, yearOld, roomsNumber);
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

    await getRequest(searchPlace, adultsNumber, yearOld, roomsNumber);
  }
}

document.querySelector('.header__button').onclick = clickSearchAll;
