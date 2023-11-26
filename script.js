document.addEventListener("DOMContentLoaded", function () {
    animateCard();
});

function animateCard() {
    var card = document.querySelector(".card");
    card.style.opacity = 0;
    var position = -100;

    var animationInterval = setInterval(function () {
        if (position < 0) {
            position += 2;
            card.style.top = position + "px";
            card.style.opacity = 1 - (position / 100);
        } else {
            clearInterval(animationInterval);
        }
    }, 10);
}
