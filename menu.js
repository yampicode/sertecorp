document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const overlay = document.getElementById('overlay');
    const body = document.body;
    let savedScrollY = 0;

    function lockScroll() {
      savedScrollY = window.scrollY;
      body.style.top = `-${savedScrollY}px`;
      body.classList.add('no-scroll');
    }
    function unlockScroll() {
      body.classList.remove('no-scroll');
      body.style.top = '';
      window.scrollTo(0, savedScrollY);
    }
    function openMenu() {
      mobileMenu.classList.add('open');
      overlay.classList.add('active');
      lockScroll();
      menuToggle.setAttribute('aria-expanded','true');
      closeMenu.focus();
    }
    function closeMenuFn() {
      mobileMenu.classList.remove('open');
      overlay.classList.remove('active');
      unlockScroll();
      menuToggle.setAttribute('aria-expanded','false');
      menuToggle.focus();
    }
    menuToggle.addEventListener('click', openMenu);
    closeMenu.addEventListener('click', closeMenuFn);
    overlay.addEventListener('click', closeMenuFn);
    mobileMenu.querySelectorAll('a').forEach(link=>{
      link.addEventListener('click', closeMenuFn);
    });
    document.addEventListener('keydown', e=>{
      if(e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenuFn();
    });
  });