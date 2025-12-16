console.log("Welcome to my portfolio!");

//Example: Change background color on click
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const heroHeight = hero.offsetHeight;
  const opacity = Math.min(scrollY / heroHeight, 1);
  hero.style.backgroundColor = `rgba(255, 255, 255, ${1 - opacity})`;
});


