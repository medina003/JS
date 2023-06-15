const field = document.querySelector("#field");
const ball = document.querySelector("#ball");





field.onclick = function(e) {
    ball.style.left = e.pageX - ball.offsetWidth / 2 + "px";
    ball.style.top = e.pageY - ball.offsetHeight / 2 + "px";

    if (field.offsetHeight - 25 < e.pageY) {
        ball.style.top = field.offsetHeight - 25 + "px";
    }

    if (field.offsetWidth - 25 < e.pageX) {
        ball.style.left = field.offsetWidth - 25 + "px";
    }

    if (e.pageY < ball.offsetHeight / 2) {
        ball.style.top = 0 + "px";
    }
    if (e.pageX < ball.offsetWidth / 2) {
        ball.style.left = 0 + "px";
    }
};