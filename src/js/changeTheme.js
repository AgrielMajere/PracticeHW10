import createMenuMarkup from '../templates/menuCards.hbs';
import menu from '../data/menu.json';



(function(){


  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  
  const refs = {
    menuList: document.querySelector('.js-menu'),
    switcher: document.querySelector('#theme-switch-toggle'),
    body: document.body,
  };

refs.body.classList.add(
  localStorage.getItem('theme') ? localStorage.getItem('theme') : Theme.LIGHT,
);
refs.switcher.checked = localStorage.getItem('theme') === Theme.DARK;
  
refs.menuList.innerHTML = createMenuMarkup(menu);

refs.switcher.addEventListener('change', changeTheme);


function changeTheme({target:{ checked}}) {
  checked ? toggleTheme(Theme.DARK,Theme.LIGHT) : toggleTheme(Theme.LIGHT,Theme.DARK);
}

function toggleTheme(add,rem){
  refs.body.classList.replace(rem,add);
  const state = {
theme: add,
checked: add === Theme.DARK,
  };
  localStorage.setItem('theme', JSON.stringify(state));
}

})();

