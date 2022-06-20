document.body.innerHTML = `
  <p id="text1">Text 1</p>
  <p id="text2">Text 2</p>
  <p id="text3">Text 3</p>`;

const changeColor = require('../js/lesson-4');

describe('check color', () => {
  const element1 = document.getElementById('text1');
  const element2 = document.getElementById('text2');
  const element3 = document.getElementById('text3');
  const elementsArr = [element1, element2, element3];

  test('1 click color is magenta', () => {
    for (let i = 0; i < elementsArr.length; i += 1) {
      elementsArr[i].click();
      changeColor(elementsArr[i]);
      const { color } = elementsArr[i].style;
      expect(color).toBe('magenta');
    }
  });

  test('2 click color is cyan', () => {
    for (let i = 0; i < elementsArr.length; i += 1) {
      elementsArr[i].click();
      changeColor(elementsArr[i]);
      const { color } = elementsArr[i].style;
      expect(color).toBe('cyan');
    }
  });

  test('3 click color is firebrick', () => {
    for (let i = 0; i < elementsArr.length; i += 1) {
      elementsArr[i].click();
      changeColor(elementsArr[i]);
      const { color } = elementsArr[i].style;
      expect(color).toBe('firebrick');
    }
  });

  test('4 click color is springgreen', () => {
    for (let i = 0; i < elementsArr.length; i += 1) {
      elementsArr[i].click();
      changeColor(elementsArr[i]);
      const { color } = elementsArr[i].style;
      expect(color).toBe('springgreen');
    }
  });

  test('5 click color is skyblue', () => {
    for (let i = 0; i < elementsArr.length; i += 1) {
      elementsArr[i].click();
      changeColor(elementsArr[i]);
      const { color } = elementsArr[i].style;
      expect(color).toBe('skyblue');
    }
  });

  test('check cycle actions', () => {
    for (let i = 0; i < elementsArr.length; i += 1) {
      elementsArr[i].click();
      changeColor(elementsArr[i]);
      const { color } = elementsArr[i].style;
      expect(color).toBe('magenta');
    }
  });
});
