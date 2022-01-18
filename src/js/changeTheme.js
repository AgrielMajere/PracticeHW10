import createMenuMarkup from '../templates/menuCards.hbs';
import menu from '../data/menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menuList: document.querySelector('.js-menu'),
  switcher: document.querySelector('#theme-switch-toggle'),
  body: document.body,
};

refs.menuList.innerHTML = createMenuMarkup(menu);

refs.switcher.addEventListener('change', changeTheme);

function changeTheme(event) {
  if (event.target.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
(function(){
refs.body.classList.add(localStorage.getItem('theme')?localStorage.getItem('theme'):Theme.LIGHT,
);
refs.switcher.checked = localStorage.getItem('theme') === Theme.DARK;
})()

// function themeDefault() {
//   if (refs.body.classList.contains(Theme.DARK)) {
//     refs.switcher.checked = true;
//   } else {
//     refs.switcher.checked = false;
//   }
// }
