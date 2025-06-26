const sideMenu = document.querySelector('#sideMenu');
const navbar = document.querySelector('nav');
const navLinks = document.querySelector('navul');


function openMenu() {
  sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
  sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll',
  () => {
    if (scroll > 50) {
      navbar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
      navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
    }
    else {
      navbar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
      navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
    }
  }
)

// light mode and dark mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);


function toggleTheme() {

  document.documentElement.classList.contains('dark');
  if (document.documentElement.classList.contains('dark')) {
    localStorage.theme = 'dark';
  }
  else {
    localStorage.theme = 'light';
  }
}