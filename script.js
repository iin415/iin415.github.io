document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const navList = document.querySelector('nav ul');

  toggle.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
});
