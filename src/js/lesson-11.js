const formPeopleRoom = document.getElementById('people-room');
const filterContent = document.querySelector('.container__forms--filter');

formPeopleRoom.addEventListener('click', () => {
  if (filterContent.style.display === 'none') {
    filterContent.style.display = 'block';
  } else filterContent.style.display = 'none';
});

const select = document.createElement('select');
select.style.width = `${99}px'`;
select.style.height = `${30}px`;

function createSelect() {
  for (let old = 1; old <= 17; old += 1) {
    const option = document.createElement('option');
    option.innerHTML = `${old} years old`;
    select.appendChild(option);
  }
}

createSelect();

// const input = document.querySelector('.header__choice--people');
const adults = document.querySelector('.add__first');
const children = document.querySelector('.add__second');
const room = document.querySelector('.add__third');

function countThings(count) {
  const plus = count.querySelector('.btn__filter--plus');
  const minus = count.querySelector('.btn__filter--minus');
  const result = count.querySelector('.filter__counter');
  let counter = 0;
  // input.value = `${counter} Adults — ${counter} Children — ${counter} Room`;
  const filterPlusName = count.lastChild.previousSibling.className;
  plus.addEventListener('click', () => {
    if (counter <= 29 && filterPlusName === 'btn__filter--plus thirty__adults') {
      counter += 1;
      result.innerHTML = `${counter}`;
      adults.innerHTML = `${counter} Adults`;
    }
    if (counter <= 29 && filterPlusName === 'btn__filter--plus thirty__rooms') {
      counter += 1;
      result.innerHTML = `${counter}`;
      room.innerHTML = `— ${counter} Room`;
    }
    if (counter <= 9 && filterPlusName === 'btn__filter--plus fifteen') {
      counter += 1;
      result.innerHTML = `${counter}`;
      const divQuestions = document.querySelector('.wrapper__select');
      const newSelect = select.cloneNode(true);
      divQuestions.appendChild(newSelect);
      // input.value = `${counter} Children`;
      children.innerHTML = `— ${counter} Children `;
    }
  });
  minus.addEventListener('click', () => {
    if (counter >= 1 && filterPlusName === 'btn__filter--plus thirty__adults') {
      counter -= 1;
      result.innerHTML = `${counter}`;
      adults.innerHTML = `${counter} Adults`;
    }
    if (counter >= 1 && filterPlusName === 'btn__filter--plus thirty__rooms') {
      counter -= 1;
      result.innerHTML = `${counter}`;
      room.innerHTML = `— ${counter} Room`;
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
      children.innerHTML = `— ${counter} Children `;
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
