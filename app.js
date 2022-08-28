const sections = document.querySelectorAll('.sections');
const asides = document.querySelectorAll('aside');
const main = document.querySelector('h1');
const bars = document.querySelectorAll('.bar-container');
const backgroundFade = document.querySelector('.background-fade');

for (let section of sections) {
    section.addEventListener("mouseenter", () => {
        const arrow = section.querySelector('span');
        arrow.style.visibility = "visible";
    });

    section.addEventListener("mouseleave", () => {
        const arrow = section.querySelector('span');
        arrow.style.visibility = "hidden";
    });

    section.addEventListener("click", () => {
        const asideName = section.className.split(" ")[0];
        for (let aside of asides) {
            if (aside.className.includes(asideName)) {
                aside.style.right = 0 + "%";
                backgroundFade.style.visibility = "visible";
                break;
            }
        }
    });
}

window.addEventListener('scroll', () => {
    main.style.top = 0.02*window.scrollY + "vh";

    sections.forEach(section => {
        if (isInViewport(section)) {
            $(section).addClass('section-show');
        }
    });
});

for (let bar of bars) {
    bar.addEventListener('click', () => {
        bar.parentElement.style.right = -50 + "%";
        backgroundFade.style.visibility = "hidden";
    });
}

backgroundFade.addEventListener('click', () => {
    for (let aside of asides) {
        aside.style.right = -50 + '%';
    }
    backgroundFade.style.visibility = "hidden";
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || DocumentType.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}