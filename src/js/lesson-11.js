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

const input = document.querySelector('.header__choice--people');
input.value = '0 Adults — 0 Children — 0 Room';
input.addEventListener('click', () => {
  input.value = '';
});

const adults = document.querySelector('.add__first');
const children = document.querySelector('.add__second');
const room = document.querySelector('.add__third');

function countThings(count) {
  const plus = count.querySelector('.btn__filter--plus');
  const minus = count.querySelector('.btn__filter--minus');
  const result = count.querySelector('.filter__counter');
  let counter = 0;

  const filterPlusName = count.lastChild.previousSibling.className;
  plus.addEventListener('click', () => {
    minus.style.color = '#3077C6';
    minus.style.borderColor = '#3077C6';

    if (counter <= 29 && filterPlusName === 'btn__filter--plus thirty__adults') {
      counter += 1;
      result.innerHTML = `${counter}`;
      adults.innerHTML = `${counter} Adults`;

      if (result.innerHTML === '30') {
        plus.style.color = '#CECECE';
        plus.style.borderColor = '#CECECE';
      }
    }

    if (counter <= 29 && filterPlusName === 'btn__filter--plus thirty__rooms') {
      counter += 1;
      result.innerHTML = `${counter}`;
      room.innerHTML = `— ${counter} Room`;

      if (result.innerHTML === '30') {
        plus.style.color = '#CECECE';
        plus.style.borderColor = '#CECECE';
      }
    }

    if (counter <= 9 && filterPlusName === 'btn__filter--plus fifteen') {
      counter += 1;
      result.innerHTML = `${counter}`;

      if (result.innerHTML === '10') {
        plus.style.color = '#CECECE';
        plus.style.borderColor = '#CECECE';
      }
      const divQuestions = document.querySelector('.wrapper__select');
      const newSelect = select.cloneNode(true);
      divQuestions.appendChild(newSelect);
      children.innerHTML = `— ${counter} Children `;
    }
  });

  minus.addEventListener('click', () => {
    if (+result.innerHTML <= 1) {
      minus.style.color = '#CECECE';
      minus.style.borderColor = '#CECECE';
    } else {
      minus.style.color = '#3077c6';
      minus.style.borderColor = '#3077c6';
    }

    if (counter >= 1 && filterPlusName === 'btn__filter--plus thirty__adults') {
      counter -= 1;
      result.innerHTML = `${counter}`;
      adults.innerHTML = `${counter} Adults`;

      if (+result.innerHTML <= 30) {
        plus.style.color = '#3077C6';
        plus.style.borderColor = '#3077C6';
      }
    }

    if (counter >= 1 && filterPlusName === 'btn__filter--plus thirty__rooms') {
      counter -= 1;
      result.innerHTML = `${counter}`;
      room.innerHTML = `— ${counter} Room`;

      if (+result.innerHTML <= 30) {
        plus.style.color = '#3077C6';
        plus.style.borderColor = '#3077C6';
      }
    }

    if (counter >= 1 && filterPlusName === 'btn__filter--plus fifteen') {
      counter -= 1;
      result.innerHTML = `${counter}`;
      const divQuestions = document.querySelector('.wrapper__select');
      divQuestions.lastChild.remove();

      if (+result.innerHTML <= 10) {
        plus.style.color = '#3077C6';
        plus.style.borderColor = '#3077C6';
      }

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
