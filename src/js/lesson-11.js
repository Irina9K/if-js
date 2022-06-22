const formPeopleRoom = document.getElementById('people-room');
const filterContent = document.querySelector('.container__forms--filter');

formPeopleRoom.addEventListener('click', () => {
  if (filterContent.style.display === 'none') {
    filterContent.style.display = 'block';
  } else filterContent.style.display = 'none';
});

const select = document.createElement('select');

function createSelect() {
  for (let old = 1; old <= 17; old += 1) {
    const option = document.createElement('option');
    option.innerHTML = `${old} years old`;
    select.appendChild(option);
  }
}
createSelect();

function countThings(count) {
  const plus = count.querySelector('.btn__filter--plus');
  const minus = count.querySelector('.btn__filter--minus');
  const result = count.querySelector('.filter__counter');
  let counter = 0;
  const filterPlusName = count.lastChild.previousSibling.className;

  plus.addEventListener('click', () => {
    if (counter <= 29 && filterPlusName === 'btn__filter--plus thirty') {
      counter += 1;
      result.innerHTML = `${counter}`;
    }
    if (counter <= 9 && filterPlusName === 'btn__filter--plus fifteen') {
      counter += 1;
      result.innerHTML = `${counter}`;
      const divQuestions = document.querySelector('.wrapper__select');
      const newSelect = select.cloneNode(true);
      divQuestions.appendChild(newSelect);
    }
  });
  minus.addEventListener('click', () => {
    if (counter >= 1 && filterPlusName === 'btn__filter--plus thirty') {
      counter -= 1;
      result.innerHTML = `${counter}`;
    }
    if (counter >= 1 && filterPlusName === 'btn__filter--plus fifteen') {
      counter -= 1;
      result.innerHTML = `${counter}`;
      const divQuestions = document.querySelector('.wrapper__select');
      divQuestions.lastChild.remove();
      if (document.getElementById('hidden__counter').textContent === '0') {
        const childrenInf = document.querySelector('.wrapper__children--inf');
        childrenInf.style.display = 'none';
      }
    }
  });
}

const counts = document.querySelectorAll('.filter__item');
counts.forEach(countThings);

const showInf = document.querySelector('.wrapper__children--inf');
const addInf = document.querySelector('.fifteen');

addInf.addEventListener('click', () => {
  if (showInf.style.display === 'none') {
    showInf.style.display = 'block';
  } else showInf.style.display = 'block';
});
