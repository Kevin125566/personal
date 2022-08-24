const sections = document.querySelectorAll('.sections');

for (let section of sections) {
    section.addEventListener("mouseenter", () => {
        const arrow = section.querySelector('span');
        arrow.style.visibility = "visible";
    });

    section.addEventListener("mouseleave", () => {
        const arrow = section.querySelector('span');
        arrow.style.visibility = "hidden";
    });
}

const main = document.querySelector('h1');

window.addEventListener('scroll', () => {
    main.style.top = 0.02*window.scrollY + "vh";
    console.log('wasdwasd');
});