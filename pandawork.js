const panda = document.getElementById('panda');
const obstacle = document.getElementById('obstacle');
const score = document.getElementById('score');

function jump() {
    panda.classList.add('walk-panda');
    panda.classList.add('jump-panda');
    // class defined in css
    setTimeout(() =>
        panda.classList.remove('jump-panda'), 500);
}

document.addEventListener('keydown', () => {
    if (!panda.classList.contains('jump-panda')) {
        jump();
    }
})

setInterval(() => {
    score.innerText++;
    // getting the top of panda
    const pandaTop = parseInt(window.getComputedStyle(panda)
        .getPropertyValue('top'));
    //getting the left position of obstacle
    const obstacleLeft = parseInt(window.getComputedStyle(obstacle)
        .getPropertyValue('left'));

    if (obstacleLeft < 90 && obstacleLeft > 0 && pandaTop > 325) {
        alert("You got a score of: " + score.innerText +
            "\n\nPlay again?");
        location.reload();
    }
}, 50)