const gameoverEl = document.querySelector('.gameover')
const scoreEl = document.querySelector('.score')
const dino = document.querySelector('.dino')
const obstacle = document.querySelector('.obstacle')

let score = 0
let cross = true
document.addEventListener('keydown', (event)=>{
    console.log(event.key)
    
    if(event.key == 'ArrowUp'){
        dino.classList.add('animateDino')
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 1000);
    }

    if(event.key == 'ArrowRight'){
        dx = Number.parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
        dino.style.left = dx + 50+'px'
    }

    if(event.key == 'ArrowLeft'){
        dx = Number.parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
        dino.style.left = dx - 50+'px'
    }
})

let gamecheck = setInterval(() => {

    dx = Number.parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
    dy = Number.parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'))
    ox = Number.parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'))
    oy = Number.parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'))

    offsetX = Math.abs(dx-ox)
    offsetY = Math.abs(dy-oy)

    if(offsetX < 100 && offsetY < 80){
        console.log('Game Over')
        gameoverEl.style.visibility = 'visible'
        obstacle.classList.remove('animateObstacle')
    }else if(offsetX<145 && cross){
        score += 1
        updateScore(score)
        cross = false
        setTimeout(() => {
            cross = true
        }, 1000);
        setTimeout(() => {
            obstacle.style.animationDuration = `${parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration')) - 0.05}s`
        }, 500);
    }

}, 100);

function updateScore(score){
    scoreEl.innerHTML = `Your Score: ${score}`
}