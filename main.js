import './style.css';

import sunImage from './assets/sun.svg';
import moonImage from './assets/moon.svg';

const themeBtn = document.querySelector('.theme');

function getCurrentTheme() {
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
  return loadFromLs() || theme;
}

function loadTheme(theme) {
  const root = document.querySelector(':root');
  switch (theme) {
    case 'light': {
      themeBtn.setAttribute('src', moonImage);
      break;
    }
    case 'dark': {
      themeBtn.setAttribute('src', sunImage);
      break;
    }
  }

  root.setAttribute('color-scheme', `${theme}`);
}

function saveToLS(theme) {
  localStorage.setItem('theme', JSON.stringify(theme));
}

function loadFromLs() {
  return JSON.parse(localStorage.getItem('theme'));
}

themeBtn.addEventListener('click', () => {
  let theme = getCurrentTheme();
  switch (theme) {
    case 'dark': {
      theme = 'light';
      break;
    }
    case 'light': {
      theme = 'dark';
      break;
    }
  }
  saveToLS(theme);
  loadTheme(theme);
});

document.addEventListener('DOMContentLoaded', () => {
  loadTheme(getCurrentTheme());
});
