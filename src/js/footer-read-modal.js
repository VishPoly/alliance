(() => {
    const refs = {
    openModalBtn: document.querySelector(".about__btn"),
    closeModalBtn: document.querySelector(".close-btn"),
    modal: document.querySelector("[data-modal-read]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.querySelector('body').classList.toggle('is-body-hidden');
    }
})();