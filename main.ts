controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    whack = sprites.createProjectileFromSprite(img`
        a a a . . . . . . a . . . . a . 
        . . a a . . . . a a . . . . a . 
        . . . a . . . . a . . . . a . . 
        . . . a a . . . a . . . a . . . 
        . . . . a a . . a . . a . . . . 
        . . . . . . . . . . . . . . . . 
        a . . . . . . . . . . . . . . . 
        a a a a a . . . . . . a a a a . 
        . . . . . . . . . . . . . . . a 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a a . . . . a . . . . . 
        . . . a a . . a . . a . . . . . 
        . . . a . . . a . . . a . . . . 
        a a a . . . . a . . . a a . . . 
        a . . . . . . a a . . . . a a a 
        `, goodGuyBat, 0, 0)
    pause(500)
    sprites.destroy(whack, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.trail, 1000)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    Invincibility = 1
    pause(1000)
    Invincibility = 0
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    statusbar.value += -1
})
let FreeSouls: Sprite = null
let whack: Sprite = null
let arrow: Sprite = null
let statusbar: StatusBarSprite = null
let EvilSkeleton: Sprite = null
let Zombie: Sprite = null
let goodGuyBat: Sprite = null
let Invincibility = 0
scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
tiles.setCurrentTilemap(tilemap`level1`)
let crow = darts.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Invincibility = 0
goodGuyBat = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . a a a a c . . . . . . 
    . . . . . a a a c c . . . . . . 
    . . . . . a a c c c . . . . . . 
    . . . . . . c c c . . . . . . . 
    . . . . . . f c f . . . . . . . 
    . . . . . . c . c . . . . . . . 
    . . . . . . c . c . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(goodGuyBat, tiles.getTileLocation(8, 2))
lantern.startLanternEffect(goodGuyBat)
lantern.setLightBandWidth(15)
pause(5000)
goodGuyBat.sayText("Oh no!", 5000, false)
controller.moveSprite(goodGuyBat)
info.setLife(10)
characterAnimations.loopFrames(
goodGuyBat,
[img`
    . . . . . c . . c . . . . . . . 
    . . . . c a c c a c . . . . . . 
    . . . . c a c c a c . . . . . . 
    . . . . . f c c f . . . . . . . 
    . . . . . c a a c . . . . . . . 
    . c c c c 1 c c 1 c c c c . . . 
    . d . c c c c c c c c . d . . . 
    . . . . c c c c c c . . . . . . 
    . . . . . c c c c . . . . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . c . . c . . . . . . . 
    . . . . c a c c a c . . . . . . 
    . . . . . f c c f . . . . . . . 
    . . . . . c a a c . . . . . . . 
    . c c c c 1 c c 1 c c c c . . . 
    . c c c c c c c c c c c c . . . 
    . c c . c c c c c c . c c . . . 
    . . . . . f . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
200,
characterAnimations.rule(Predicate.Moving)
)
characterAnimations.loopFrames(
goodGuyBat,
[img`
    . . . . . c . . c . . . . . . . 
    . . . . c a c c a c . . . . . . 
    . . . . c a c c a c . . . . . . 
    . . . . . f c c f . . . . . . . 
    . . . . . c a a c . . . . . . . 
    . c c c c 1 c c 1 c c c c . . . 
    . d . c c c c c c c c . d . . . 
    . . . . c c c c c c . . . . . . 
    . . . . . c c c c . . . . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . c . . c . . . . . . . 
    . . . . c a c c a c . . . . . . 
    . . . . . f c c f . . . . . . . 
    . . . . . c a a c . . . . . . . 
    . c c c c 1 c c 1 c c c c . . . 
    . c c c c c c c c c c c c . . . 
    . c c . c c c c c c . c c . . . 
    . . . . . f . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
200,
characterAnimations.rule(Predicate.NotMoving)
)
game.splash("Wave one")
scene.cameraFollowSprite(goodGuyBat)
pause(5000)
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    Zombie = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . . c 7 7 c . . . . . . 
        . . . . . . 7 b b 7 . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . 7 7 . a a a a . 7 7 . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 7 . . 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . 7 7 . . 7 7 . . . . . 
        `, SpriteKind.Player)
    Zombie.setKind(SpriteKind.Enemy)
    tiles.placeOnTile(Zombie, value)
    scaling.scaleToPercent(Zombie, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    Zombie.startEffect(effects.trail, 500)
    Zombie.follow(goodGuyBat, 10)
}
pause(10000)
game.splash("Wave two")
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    Zombie = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . . c 7 7 c . . . . . . 
        . . . . . . 7 b b 7 . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . 7 7 . a a a a . 7 7 . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 7 . . 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . 7 7 . . 7 7 . . . . . 
        `, SpriteKind.Player)
    Zombie.setKind(SpriteKind.Enemy)
    tiles.placeOnTile(Zombie, value)
    scaling.scaleToPercent(Zombie, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    Zombie.startEffect(effects.trail, 500)
    Zombie.follow(goodGuyBat, 10)
}
pause(10000)
game.splash("Wave three")
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    Zombie = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . . c 7 7 c . . . . . . 
        . . . . . . 7 b b 7 . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . 7 7 . a a a a . 7 7 . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 7 . . 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . 7 7 . . 7 7 . . . . . 
        `, SpriteKind.Player)
    Zombie.setKind(SpriteKind.Enemy)
    tiles.placeOnTile(Zombie, value)
    scaling.scaleToPercent(Zombie, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    Zombie.startEffect(effects.trail, 500)
    Zombie.follow(goodGuyBat, 10)
}
pause(10000)
game.splash("Wave four")
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    Zombie = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . . c 7 7 c . . . . . . 
        . . . . . . 7 b b 7 . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . 7 7 . a a a a . 7 7 . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 7 . . 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . 7 7 . . 7 7 . . . . . 
        `, SpriteKind.Player)
    Zombie.setKind(SpriteKind.Enemy)
    tiles.placeOnTile(Zombie, value)
    scaling.scaleToPercent(Zombie, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    Zombie.startEffect(effects.trail, 500)
    Zombie.follow(goodGuyBat, 10)
}
pause(10000)
game.splash("Wave five")
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    Zombie = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . . c 7 7 c . . . . . . 
        . . . . . . 7 b b 7 . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . 7 7 . a a a a . 7 7 . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 7 . . 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . 7 7 . . 7 7 . . . . . 
        `, SpriteKind.Player)
    Zombie.setKind(SpriteKind.Enemy)
    tiles.placeOnTile(Zombie, value)
    scaling.scaleToPercent(Zombie, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    Zombie.startEffect(effects.trail, 500)
    Zombie.follow(goodGuyBat, 10)
}
pause(10000)
game.splash("Wave six")
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    Zombie = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . . c 7 7 c . . . . . . 
        . . . . . . 7 b b 7 . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . 7 7 . a a a a . 7 7 . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 7 . . 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . 7 7 . . 7 7 . . . . . 
        `, SpriteKind.Player)
    Zombie.setKind(SpriteKind.Enemy)
    tiles.placeOnTile(Zombie, value)
    scaling.scaleToPercent(Zombie, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    Zombie.startEffect(effects.trail, 500)
    Zombie.follow(goodGuyBat, 10)
}
pause(10000)
game.splash("Wave seven")
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    Zombie = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . . c 7 7 c . . . . . . 
        . . . . . . 7 b b 7 . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . 7 7 . a a a a . 7 7 . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 7 . . 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . 7 7 . . 7 7 . . . . . 
        `, SpriteKind.Player)
    Zombie.setKind(SpriteKind.Enemy)
    tiles.placeOnTile(Zombie, value)
    scaling.scaleToPercent(Zombie, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    Zombie.startEffect(effects.trail, 500)
    Zombie.follow(goodGuyBat, 10)
}
pause(10000)
game.splash("Wave eight")
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    Zombie = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . . c 7 7 c . . . . . . 
        . . . . . . 7 b b 7 . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . 7 7 . a a a a . 7 7 . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 7 . . 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . 7 7 . . 7 7 . . . . . 
        `, SpriteKind.Player)
    Zombie.setKind(SpriteKind.Enemy)
    tiles.placeOnTile(Zombie, value)
    scaling.scaleToPercent(Zombie, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    Zombie.startEffect(effects.trail, 500)
    Zombie.follow(goodGuyBat, 10)
}
pause(10000)
game.splash("Wave nine")
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    Zombie = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . . c 7 7 c . . . . . . 
        . . . . . . 7 b b 7 . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . 7 7 . a a a a . 7 7 . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 7 . . 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . 7 7 . . 7 7 . . . . . 
        `, SpriteKind.Player)
    Zombie.setKind(SpriteKind.Enemy)
    tiles.placeOnTile(Zombie, value)
    scaling.scaleToPercent(Zombie, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    Zombie.startEffect(effects.trail, 500)
    Zombie.follow(goodGuyBat, 10)
}
pause(10000)
game.splash("Wave ten")
tiles.setCurrentTilemap(tilemap`level2`)
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    EvilSkeleton = sprites.create(img`
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . 1 f 1 f 1 . . . f . 
        . . . . . . 1 1 1 1 1 . . f f f 
        . . . . . . 1 1 4 1 1 . . . e . 
        . . . . . . 1 1 1 1 1 . . . e . 
        . . e . . 1 1 1 1 1 1 1 . . e . 
        . e d . 1 . 1 1 1 1 1 . 1 . e . 
        e . d 1 . . 1 1 1 1 1 . . 1 e . 
        e . d . . . 1 1 1 1 1 . . . e . 
        . e d . . . 1 1 1 1 1 . . . d . 
        . . e . . . 1 1 1 1 1 . . d d d 
        . . . . . . 1 1 1 1 1 . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . 1 . 1 1 . . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    EvilSkeleton.follow(goodGuyBat, 3)
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(EvilSkeleton, 10, 5)
    statusbar.max = 10
    for (let index = 0; index < 100000000; index++) {
        arrow = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . d d d . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, EvilSkeleton, 50, 0)
        arrow.setKind(SpriteKind.Enemy)
        arrow.follow(goodGuyBat, 20)
        pause(3000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
        scaling.scaleByPercent(EvilSkeleton, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    }
}
forever(function () {
	
})
forever(function () {
    Zombie.setFlag(SpriteFlag.BounceOnWall, true)
})
forever(function () {
    lantern.startLanternEffect(Zombie)
    lantern.setLightBandWidth(5)
})
forever(function () {
    if (info.life() == 0) {
        goodGuyBat.startEffect(effects.halo, 5000)
        pause(5000)
        game.gameOver(false)
        pause(5000)
        game.reset()
    }
})
forever(function () {
    if (arrow) {
        characterAnimations.loopFrames(
        arrow,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f . . . . . . d . . . . . 
            . . f f e e e e e e d . . . . . 
            . . . f . . . . . . d . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        arrow,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . d . . . . . . f . . . . . 
            . . . d e e e e e e f f . . . . 
            . . . d . . . . . . f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
        arrow,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . d d d . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        characterAnimations.rule(Predicate.MovingUp)
        )
        characterAnimations.loopFrames(
        arrow,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . d d d . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        characterAnimations.rule(Predicate.MovingDown)
        )
    }
})
game.onUpdateInterval(500, function () {
    if (statusbar.value == 0) {
        EvilSkeleton.sayText("NNNNNNNOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!")
        scene.cameraShake(4, 5000)
        sprites.destroy(EvilSkeleton, effects.blizzard, 5000)
        tiles.setCurrentTilemap(tilemap`level1`)
        for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
            FreeSouls = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 8 8 8 . . . . . . . 
                . . . . . 8 6 6 6 8 . . . . . . 
                . . . . 8 6 9 9 9 6 8 . . . . . 
                . . . . 8 6 9 9 9 6 8 . . . . . 
                . . . . 8 6 9 9 9 6 8 . . . . . 
                . . . . . 8 6 6 6 8 . . . . . . 
                . . . . . . 8 8 8 . . . . . . . 
                . . . . . . 8 8 8 . . . . . . . 
                . . . . . . 8 8 8 . . . . . . . 
                . . . . . . 8 8 8 . . . . . . . 
                . . . . . . . 8 . . . . . . . . 
                . . . . . . . 8 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
            tiles.placeOnTile(FreeSouls, value)
            FreeSouls.sayText("Thank you for freeing us!", 2000, false)
            sprites.destroy(FreeSouls, effects.coolRadial, 2000)
        }
    }
})
