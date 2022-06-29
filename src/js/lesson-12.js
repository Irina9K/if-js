const start = document.querySelector('.main__homes');
const elementHomes = start.lastElementChild.lastElementChild;

fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    result.forEach((item) => {
      const figure = document.createElement('figure');
      figure.className = 'main__homes--element';
      figure.setAttribute('id', item.id);
      elementHomes.appendChild(figure);

      const img = document.createElement('img');
      img.setAttribute('src', item.imageUrl);
      img.style.width = `${296}px`;
      img.style.height = `${296}px`;
      figure.appendChild(img);

      const figcaption = document.createElement('figcaption');
      figcaption.className = 'main__name--img';
      figure.appendChild(figcaption);

      const hotelName = document.createElement('a');
      hotelName.setAttribute('href', '#');
      hotelName.className = 'nav__link--country';
      hotelName.innerHTML = item.name;
      figcaption.appendChild(hotelName);

      const countryName = document.createElement('a');
      countryName.setAttribute('href', '#');
      countryName.className = 'main__name--country';
      countryName.innerHTML = `${item.city}  ${item.country}`;
      figcaption.appendChild(countryName);
    });
  })
  .catch((err) => console.log(err));
