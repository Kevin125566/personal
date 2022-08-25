const sections = document.querySelectorAll('.sections');
const asides = document.querySelectorAll('aside');
const main = document.querySelector('h1');
const bars = document.querySelectorAll('.bar-container');
const backgroundFade = document.querySelector('.background-fade');

// maybe

// $(document).ready(function() {
//     main.style.opacity = 100;
//     main.style.fontSize = 150 + "px";
// });

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