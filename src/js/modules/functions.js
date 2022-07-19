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

function removeChildren() {
  const wrapperElements = document.querySelector('.main__free--hotel');

  while (wrapperElements.firstChild) {
    wrapperElements.removeChild(wrapperElements.firstChild);
  }
}
const startShow = document.querySelector('.main__free');
const elementFree = startShow.lastElementChild.lastElementChild;

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

export {
  createSelect, countThings, removeChildren, createBlockError, elementFree,
};
