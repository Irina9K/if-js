const form = document.getElementById('form');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  fetch('https://fe-student-api.herokuapp.com/api/file', {
    method: 'POST',
    body: new FormData(form),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});
