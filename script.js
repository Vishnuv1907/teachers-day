/* ================= SCREEN NAVIGATION ================= */

function hideAllScreens() {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

}


function showGifts() {

    hideAllScreens();

    document.getElementById("gifts")
        .classList.add("active");

    window.scrollTo(0, 0);

}


/* ================= OPENING ================= */

function goHome() {

    hideAllScreens();

    document.getElementById("home")
        .classList.add("active");

    window.scrollTo(0, 0);

}


/* ================= OPEN GIFTS ================= */

function openGift(number) {

    hideAllScreens();

    const gift = document.getElementById(
        "gift" + number
    );

    gift.classList.add("active");

    window.scrollTo(0, 0);

}


/* ================= LETTER ================= */

function openLetter() {

    document.getElementById("letter")
        .classList.add("show");

}


function closeLetter() {

    document.getElementById("letter")
        .classList.remove("show");

}


/* ================= PETALS ================= */

function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    const flowers = [
        "🌸",
        "🌷",
        "🌺",
        "✨",
        "💮"
    ];

    petal.innerHTML =
        flowers[
            Math.floor(
                Math.random() * flowers.length
            )
        ];

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.fontSize =
        (Math.random() * 15 + 15) + "px";

    petal.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    document.body.appendChild(petal);


    setTimeout(() => {

        petal.remove();

    }, 10000);

}


/* Create petals continuously */

setInterval(createPetal, 700);


/* ================= CLICK OUTSIDE LETTER ================= */

document.getElementById("letter")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeLetter();

        }

    });