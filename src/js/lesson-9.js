const element1 = document.getElementById('text1');
const element2 = document.getElementById('text2');
const element3 = document.getElementById('text3');
const elementsArr = [element1, element2, element3];

const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  counter: 0,
  [Symbol.iterator]() {
    return this;
  },

  next() {
    if (this.counter < this.data.length) {
      const start = this.data[(this.counter += 1)];
      return { value: start, done: false };
    }

    if (this.counter === this.data.length) {
      const end = this.data[(this.counter = 0)];
      return { value: end, done: false };
    }

    return { done: true };
  },
};

for (let i = 0; i < elementsArr.length; i += 1) {
  elementsArr[i].addEventListener('click', (event) => {
    event.target.style.color = colors.next().value;
  });
}
