(() => {
    const refs = {
    openMenuBtn: document.querySelector('[menu__btn-js]'),
    closeMenuBtn: document.querySelector('[data-menu-close-hero]'),
    menu: document.querySelector('[data-menu]'),
    // menuList: document.querySelector('[mob-menu__list]'),
    };
    console.log(refs.openMenuBtn)
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
    // refs.menuList.addEventListener('click', removeMenu);

    function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    document.querySelector('body').classList.toggle('is-body-hidden');
    }

    function removeMenu() {
    refs.menu.classList.add('is-hidden');
        document.querySelector('body').classList.remove('no-scroll');
        document.querySelector('body').classList.toggle('is-body-hidden');
    }
})();