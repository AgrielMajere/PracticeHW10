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
    toggleTheme(Theme.DARK,Theme.LIGHT)
  } else {
    toggleTheme(Theme.LIGHT,Theme.DARK)
  }
}
(function(){
refs.body.classList.add(
  localStorage.getItem('theme') ? localStorage.getItem('theme') : Theme.LIGHT,
);
refs.switcher.checked = localStorage.getItem('theme') === Theme.DARK;
})();

function toggleTheme(add,rem){
  refs.body.classList.replace(rem,add);
  localStorage.setItem('theme', add);
}