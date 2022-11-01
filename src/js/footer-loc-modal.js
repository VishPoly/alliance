(() => {
    const refs = {
    openModalBtn: document.querySelector(".contacts__button-loc"),
    closeModalBtn: document.querySelector(".location-close-btn"),
    modal: document.querySelector("[data-modal-loc]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.querySelector('body').classList.toggle('is-body-hidden');
    }
})();