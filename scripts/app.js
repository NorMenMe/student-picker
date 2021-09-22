// ↓↓↓  inputs arrays

const imageUrls = [
  "https://media.giphy.com/media/COYGe9rZvfiaQ/giphy.gif",
  "https://media.giphy.com/media/I9BrUZDq5hksw/source.gif",
  "https://media.giphy.com/media/B37cYPCruqwwg/source.gif",
  "https://media.giphy.com/media/hHuOmWidPXwCk/source.gif",
  "https://media.giphy.com/media/18hKuycmFuwaQ/source.gif",
  "https://media.giphy.com/media/3oFzma9FGIblOf6Wk0/source.gif",
  "https://media.giphy.com/media/7QxZfWnBLdGI8/source.gif",
  "https://media.giphy.com/media/KmTnUKop0AfFm/source.gif",
  "https://media.giphy.com/media/UseBZDm3O00hy/source.gif",
  "https://media.giphy.com/media/l0HlMWkHJKvyjftKM/source.gif",
  "https://media.giphy.com/media/d10dMmzqCYqQ0/source.gif",
  "https://media.giphy.com/media/PzQvWAhgfUipW/source.gif",
  "https://media.giphy.com/media/3q3RzbSNRugy0mH6LQ/giphy.gif",
  "https://media.giphy.com/media/2gG2xiMTtFwsg/source.gif",
  "https://media.giphy.com/media/YrD1PQldGsstG/source.gif",
  "https://media.giphy.com/media/uHox9Jm5TyTPa/giphy.gif",
  "https://media.giphy.com/media/gLQjUikb8nQnS/source.gif",
  "https://media.giphy.com/media/B6G2MYBmtnGYU/source.gif",
  "https://media.giphy.com/media/gE6IUBRWZd744/source.gif",
  "https://media.giphy.com/media/cO39srN2EUIRaVqaVq/source.gif",
];

const arrOfNames = [
  "Carleen Justis",
  "Sylvester Quevedo",
  "Chanda Mach",
  "Ashton Vera",
  "Larraine Banta",
  "Emmitt Gillard",
  "Mariko Allee",
  "Yoshiko Stonecipher",
  "Lessie Santiago",
  "Renaldo Steckler",
];

// ↓↓↓ random name

function getRandomName(array) {
  return array[Math.floor(Math.random() * arrOfNames.length)];
}

// ↓↓↓ random image

function getRandomImage() {
  return imageUrls[Math.floor(Math.random() * imageUrls.length)];
}

// ↓↓↓ selecting and core functions

const image = document.getElementById(`image`);

function updateImage() {
  image.src = getRandomImage(imageUrls);
}

const h1 = document.querySelector(`h1`);

function showNames() {
  return (h1.textContent = getRandomName(arrOfNames));
}

function updateH1() {
  const intervalId = setInterval(() => {
    showNames();
  }, 100);

  setTimeout(() => {
    showNames();
    clearInterval(intervalId);
    updateImage(imageUrls);
  }, 2000);
}

const button = document.querySelector(`button`);

button.addEventListener(`click`, () => {
  updateH1(arrOfNames);
});
