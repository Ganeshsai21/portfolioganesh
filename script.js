  function toggleMenu() {
    const menu = document.querySelector('.navbar-right');
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
      menu.style.flexDirection = 'column'; // make it stack on small screens
    }
      menu.classList.toggle('active');
  }


