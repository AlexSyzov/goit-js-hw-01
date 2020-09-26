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

setInitialTheme();
const menuItems = menuTemplate(menu);
refs.menu.insertAdjacentHTML('beforeend', menuItems);
refs.checkbox.addEventListener('change', handleCheckboxChange);

function handleCheckboxChange() {
  if (refs.checkbox.checked) {
    changeTheme(Theme.LIGHT, Theme.DARK);
    return;
  }

  changeTheme(Theme.DARK, Theme.LIGHT);
}

function setInitialTheme() {
  const theme = localStorage.getItem('Theme');

  if (theme === Theme.DARK) {
    setTheme(Theme.DARK);
    refs.checkbox.checked = true;
    return;
  }

  setTheme(Theme.LIGHT);
}

function setTheme(theme) {
  document.body.classList.add(theme);
}

function changeTheme(previousTheme, currentTheme) {
  document.body.classList.remove(previousTheme);
  document.body.classList.add(currentTheme);
  localStorage.setItem('Theme', currentTheme);
}