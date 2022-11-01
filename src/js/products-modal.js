(() => {
    const refs = {
    openModalBtn: document.querySelector(".data-modal-open-input"),
    closeModalBtn: document.querySelector(".footer-close-btn"),
    modal: document.querySelector("[data-modal-product]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.querySelector('body').classList.toggle('is-body-hidden');
    }
})();