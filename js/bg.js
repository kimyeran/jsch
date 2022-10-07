const img = `https://source.unsplash.com/random/background?sig=${Math.random()}`;
const body = document.body;
body.style.backgroundSize = 'cover';
body.style.backgroundImage = `url(${img})`;