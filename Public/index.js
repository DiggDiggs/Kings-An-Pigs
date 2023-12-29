
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
    
canvas.width = 1024 // 64 * 16
canvas.height = 576 // 64 * 9

const player = new Player()

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};
function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.velocity.x = 0
    if(keys.d.pressed) {
      player.velocity.x = 1
    } else if (keys.a.pressed) {
      player.velocity.x = -1
    }
    player.draw()
    player.update()

}

animate()

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            if (player.velocity.y === 0) player.velocity.y = -20
            break
        case 'a':
            keys.a.pressed = true
            break
        case 'd':
            keys.d.pressed = true
            break

            
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a':
            // left
            keys.a.pressed = false 
            break
        case 'd':
            // right
            keys.d.pressed = false
            break

            
    }
})
