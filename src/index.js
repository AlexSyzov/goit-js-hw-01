import './styles.css';
import menu from './menu.json';
import menuTemplate from '../templates/menu-element.hbs';

const refs = {
  checkbox: document.querySelector('input.js-switch-input'),
  menu: document.querySelector('.js-menu'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

setDarkTheme();
const menuItems = menuTemplate(menu);
refs.menu.insertAdjacentHTML('beforeend', menuItems);
refs.checkbox.addEventListener('change', handleCheckboxChange);

function handleCheckboxChange() {
  if (document.body.classList.contains(Theme.DARK)) {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
    return;
  }

  if (document.body.classList.contains(Theme.LIGHT)) {
    document.body.classList.remove(Theme.LIGHT);
  }

  document.body.classList.add(Theme.DARK);
  localStorage.setItem('Theme', Theme.DARK);
}

function setDarkTheme() {
  const theme = localStorage.getItem('Theme');

  if (theme === Theme.DARK) {
    document.body.classList.add(Theme.DARK);
    refs.checkbox.checked = true;
  }
}