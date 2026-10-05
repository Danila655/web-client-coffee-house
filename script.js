AOS.init({
    once: true,
});


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




function toggleHidden(category) {
    cards.forEach(card => {
        card.classList.toggle(
            "hidden",
            card.dataset.category !== category
        );
    });
}