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
    if (counter <= 14 && filterPlusName === 'btn__filter--plus fifteen') {
      counter += 1;
      result.innerHTML = `${counter}`;
    }
  });
  minus.addEventListener('click', () => {
    if (counter >= 1) {
      counter -= 1;
      result.innerHTML = `${counter}`;
    }
  });
}

const counts = document.querySelectorAll('.filter__item');
counts.forEach(countThings);

// const addInf = document.querySelector('.children__inf');

function showAdd() {
  const addInf = document.querySelector('.children__inf');
  if (addInf.style.display === 'none') {
    addInf.style.display = 'block';
  } else addInf.style.display = 'block';
  console.log(document.querySelector('.filter__counter').textContent);
}
showAdd();

// const select = document.querySelector('.filter__select')
// console.log(select)
//
// const option = document.createElement('option');
// select.
// for (let old=1; old<=17; old++){
//
//     console.log(`${old} years old`)
// }
