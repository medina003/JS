const soccerField = document.getElementById('soccerField');
const soccerBall = document.getElementById('soccerBall');

soccerField.addEventListener('click', function(event) {
    const fieldRect = soccerField.getBoundingClientRect();
    const ballRect = soccerBall.getBoundingClientRect();

    const clickX = event.clientX - fieldRect.left;
    const clickY = event.clientY - fieldRect.top;

    const ballX = clickX - ballRect.width / 2;
    const ballY = clickY - ballRect.height / 2;

    const maxX = fieldRect.width - ballRect.width;
    const maxY = fieldRect.height - ballRect.height;

    const finalX = Math.max(0, Math.min(ballX, maxX));
    const finalY = Math.max(0, Math.min(ballY, maxY));

    soccerBall.style.transform = `translate(${finalX}px, ${finalY}px)`;
});

// Предотвращение выхода мяча за границы поля при изменении размера окна
window.addEventListener('resize', function() {
    const fieldRect = soccerField.getBoundingClientRect();
    const ballRect = soccerBall.getBoundingClientRect();

    const maxX = fieldRect.width - ballRect.width;
    const maxY = fieldRect.height - ballRect.height;

    let ballX = parseFloat(soccerBall.style.transform.split('(')[1].split('px')[0]);
    let ballY = parseFloat(soccerBall.style.transform.split(', ')[1].split('px')[0]);

    if (ballX < 0) {
        ballX = 0;
    } else if (ballX > maxX) {
        ballX = maxX;
    }

    if (ballY < 0) {
        ballY = 0;
    } else if (ballY > maxY) {
        ballY = maxY;
    }

    soccerBall.style.transform = `translate(${ballX}px, ${ballY}px)`;
});