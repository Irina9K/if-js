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
      return { value: this.data[this.counter++], done: false };
    }

    if (this.counter === this.data.length) {
      return { value: this.data[(this.counter = 0)], done: false };
    }

    return { done: true };
  },
};

for (let i = 0; i < elementsArr.length; i += 1) {
  elementsArr[i].addEventListener('click', function onClick(event) {
    event.target.style.color = colors.next().value;
  });
}