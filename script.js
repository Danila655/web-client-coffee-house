AOS.init({
    once: true,
});

const images = document.querySelectorAll(".gallery-grid .image img");
const modalImage = document.querySelector(".gallery-modal-image");
const galleryModal = document.querySelector(".gallery-modal");
const modalClose = document.querySelector(".gallery-modal-close");




const cards = document.querySelectorAll(".menu-card");
const buttons = document.querySelectorAll(".menu-filters .btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("active")) {
            return;
        }

        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        toggleHidden(button.id);

    })
})


images.forEach(image => {
    image.addEventListener("click", () => {
        console.log(1);
        const currentSrc = image.src;
        const currentAlt = image.alt;


        modalImage.src = currentSrc;
        modalImage.alt = currentAlt;

        galleryModal.classList.add("active");
        galleryModal.setAttribute("aria-hidden", "false");
    })
})

modalClose.addEventListener("click", () => {
    galleryModal.classList.remove("active");
    galleryModal.setAttribute("aria-hidden", "true");
});

galleryModal.addEventListener("click", event => {
    if (event.target === galleryModal) {
        galleryModal.classList.remove("active");
        galleryModal.setAttribute("aria-hidden", "true");
    }
});







function toggleHidden(category) {
    cards.forEach(card => {
        card.classList.toggle(
            "hidden",
            card.dataset.category !== category
        );
    });
}
