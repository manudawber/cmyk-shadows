// Heavily inspired by Wes Bos' Javascript 30 - day 16
// https://javascript30.com/
// https://www.youtube.com/watch?v=zaz9gLI-Xac

const walk = 120; // 100px
const hero = document.querySelector('.hero');
const black = hero.querySelector('.black');
const cyan = hero.querySelector('.cyan');
const magenta = hero.querySelector('.magenta');
const yellow = hero.querySelector('.yellow');

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  
  const xWalk = 0 - Math.round((x / width * walk) - (walk / 2));
  const yWalk = 0 - Math.round((y / height * walk) - (walk / 2));
  
  cyan.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(0, 255, 255, 0.7)`;
  magenta.style.textShadow = `${xWalk * 2}px ${yWalk * 2}px 0 rgba(255, 0, 255, 0.7)`;
  yellow.style.textShadow = `${xWalk * 3}px ${yWalk * 3}px 0 rgba(255, 255, 0, 0.7)`;

  if (Math.random() < 0.01) {
    console.log(e.target, xWalk, yWalk);
  }
}

hero.addEventListener('mousemove', shadow);