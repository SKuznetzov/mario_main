kaboom({
    global: true,
    fullscreen: 1,
    scale: 1,
    debug: true,
    background: [ 0, 0, 255, ],
})

loadSprite('coin', 'coin.png')
loadSprite('evil-shroom','evel-shroom.png')
loadSprite('brick', 'brick.png')
loadSprite('block','block.png')
loadSprite('mario', 'mario.png')
loadSprite('mushroom', 'mushroom.png')
loadSprite('surprise', 'surprise.png')
loadSprite('unboxed', 'unboxed.png')
loadSprite('pipe-top-left', 'pipe-top-left.png')
loadSprite('pipe-top-right', 'pipe-top-right.png')
loadSprite('pipe-bottom-left', 'pipe-bottom-left.png')
loadSprite('pipe-bottom-right', 'pipe-bottom-right.png')

scene("game", () => {
  layers(['bg', 'obj', 'ui'], 'obj')


const map = [
    [
      '                                      ',
      '                                      ',
      '                                      ',
      '                                      ',
      '                                      ',
      '                                      ',
      '                                      ',
      '                                      ',
      '                                      ',
      '==============================   =====',
    ],
    // [
    //   '£                                       £',
    //   '£                                       £',
    //   '£                                       £',
    //   '£                                       £',
    //   '£                                       £',
    //   '£        @@@@@@              x x        £',
    //   '£                          x x x        £',
    //   '£                        x x x x  x   -+£',
    //   '£               z   z  x x x x x  x   ()£',
    //   '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
    // ]
  ]

  const levelCfg = {
    width: 20,
    height: 20,
    '=': [sprite('block', solid())]
  }
  
  const gameLevel = addLevel(map, levelCfg)
})
start("game")








