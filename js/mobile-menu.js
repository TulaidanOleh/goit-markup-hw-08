(() => {
    const refs = {
      openMenuBtn: document.querySelector('.mobile__open'),
      closeMenuBtn: document.querySelector('.mobile__close'),
      menu: document.querySelector('.mobile__menu'),
      body: document.querySelector('body'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
      refs.body.classList.toggle('no-scroll');
    }
  })();