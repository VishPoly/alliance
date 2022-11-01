(() => {
    const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    menuList: document.querySelector('.list-menu-js'),
    };

    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
    refs.menuList.addEventListener("click", removeModal);

    function toggleMenu() {
        refs.menu.classList.toggle("is-hidden");
        document.querySelector('body').classList.toggle('is-body-hidden');
    }

    function removeModal() {
        refs.menu.classList.add("is-hidden");
        document.querySelector('body').classList.remove('is-body-hidden');
    }
})();