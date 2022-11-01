(() => {
    const refs = {
    openModalBtn: document.querySelector("[data-modal-open-loc]"),
    closeModalBtn: document.querySelector("[data-modal-close-loc]"),
    modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal1);
    refs.closeModalBtn.addEventListener("click", toggleModal1);

    function toggleModal1() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("is-open-modal")
    }
})();