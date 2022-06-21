const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const element1 = document.getElementById('text1');
const element2 = document.getElementById('text2');
const element3 = document.getElementById('text3');
const elementsArr = [element1, element2, element3];

function changeColor(elem) {
  let counter = 0;
  return function endFun() {
    if (counter === colors.length) {
      counter = 0;
    }
    elem.style.color = colors[counter];
    counter += 1;
  };
}

for (let i = 0; i < elementsArr.length; i += 1) {
  elementsArr[i].addEventListener('click', changeColor(elementsArr[i]));
}

const pArray = document.getElementsByTagName('p');
for (let i = 0; i < pArray.length; i += 1) {
  pArray[i].addEventListener('click', changeColor(pArray[i]));
}

module.exports = changeColor;
