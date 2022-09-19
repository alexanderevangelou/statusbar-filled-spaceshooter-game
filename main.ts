namespace SpriteKind {
    export const Gas = SpriteKind.create()
}
namespace StatusBarKind {
    export const shield = StatusBarKind.create()
    export const ammo = StatusBarKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (statusbar5.value != 0) {
        projectile = sprites.createProjectileFromSprite(img`
            3 3 3 3 3 3 3 3 
            3 . . . . . . 3 
            3 . 3 3 3 3 . 3 
            3 . 3 . . 3 . 3 
            3 . 3 . . 3 . 3 
            3 . 3 3 3 3 . 3 
            3 . . . . . . 3 
            3 3 3 3 3 3 3 3 
            `, mySprite, 0, -70)
        projectile.startEffect(effects.ashes)
        music.pewPew.play()
        statusbar5.value += -15
    } else {
    	
    }
})
statusbars.onZero(StatusBarKind.ammo, function (status) {
    game.setDialogFrame(img`
        999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999
        999911119999119991111999111199999999119999999999
        999111111191111911111191111119911191111991111999
        999111111111111111111111111111111111111911111199
        999111111111111111111111111111111111111111111199
        999111111111111111111111111111111111111111111199
        999911111111111111111111111111111111111111111199
        999991111111111111111111111111111111111111111999
        999111111111111111111111111111111111111111111999
        991111111111111111111111111111111111111111119999
        991111111111111111111111111111111111111111111999
        999111111111111111111111111111111111111111111199
        999911111111111111111111111111111111111111111199
        999111111111111111111111111111111111111111111999
        999111111111111111111111111111111111111111119999
        999111111111111111111111111111111111111111111999
        999911111111111111111111111111111111111111111199
        999911111111111111111111111111111111111111111199
        999111111111111111111111111111111111111111111199
        991111111111111111111111111111111111111111111199
        991111111111111111111111111111111111111111111999
        991111111111111111111111111111111111111111119999
        991111111111111111111111111111111111111111111999
        999111111111111111111111111111111111111111111199
        999911111111111111111111111111111111111111111199
        999111111111111111111111111111111111111111111199
        991111111111111111111111111111111111111111111199
        991111111111111111111111111111111111111111111999
        991111111111111111111111111111111111111111119999
        991111111111111111111111111111111111111111119999
        999111111111111111111111111111111111111111111999
        99d1111111111111111111111111111111111dd111111199
        9ddd111111111111111111111111111111111dd111111199
        9ddd1111111111dd111111111111111111111dd1111dd199
        9d1d111111111ddddd11111111111ddddd111ddd111ddd99
        9ddd111ddd111d111d1111ddddd11d111d11dddd111ddd99
        9d1d11ddddd11ddddd1111ddddd11ddddd11d1dd111ddd99
        9ddd11d1d1d11d111d1dd1d1ddd11d111d11dddddddddd99
        9d1d11ddddd11ddddd1dd1ddd1d11ddddddddd1ddd111ddd
        dddd11d1d1d11d111d1dd1ddddd11d111ddddddddddddddd
        dd1d1ddddddddddddd1dd1d1ddddddddddddd1dddd111ddd
        dddd1dd1d1dddd111dddddddd1dddd111ddddddddddddddd
        dd1d1ddddddddddddddddddddddddddddddddd1ddd111ddd
        ddddddddddddddddddddddd1dddddddddddddddddddddddd
        ddddddddddddddddddddddddd1ddddddddddd1dddd111ddd
        .dddddddddddddddddddddddddddddddddddddddddddddd.
        ..dddddddddddddddddddddddddddddddddddddddddddd..
        `)
    game.setDialogCursor(assets.image`MSS Centerprise0`)
    game.showLongText("you ran out of ammo. you went back to base to be safe until the base was dystroyed by the enemies", DialogLayout.Full)
    game.over(false, effects.slash)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    status.spriteAttachedTo().destroy(effects.fire, 100)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.showLongText("you bumped into enemies too much your hull was gone so the ship was dystroyed", DialogLayout.Bottom)
    game.over(false, effects.slash)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gas, function (sprite, otherSprite) {
    statusbar.value = 100
    otherSprite.destroy()
})
statusbars.onZero(StatusBarKind.Energy, function (status) {
    game.setDialogFrame(img`
        fcfffffffffffffffffffffffffcfcffffffffffffffffff
        fcfcfffffffffffffffffffffffcfcffffffffffffffffff
        fcfcfffffffffffffffffffffffcfcffffffffffffffffff
        f4fcfffffffffffffffffffffff4f4ffffffffffffffffff
        f4f4fffffffffff3fffffffffff4f4ffffffffffffffffff
        f4f4fff3fffffffffffffffffff4f4ffffffffffffffffff
        f4f4fffffffffffffffffffffff4f4ffffffffffffffffff
        f4f4fffffffffffffffffffffff4f4fffff5ffffffffffff
        f4f4fffffffffffffffffffffff4f4ffffffffffffffffff
        f4f4fffffffffffffffffffffff4f4ffffffffffffffffff
        f4f44fffffffffffffffffffff22222fffffffffffffffff
        f4ff44ff2ffffffffffffffffff2f2ffffffffffff5fffff
        f44ff44422ffffffffffffffffff2fffffffffffffffffff
        ff44ffff2f2fffffffffff3fffffffffffffffffffffffff
        fff4444422ffffffffffffffffffffffffffffffffffffff
        ffffffff2fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff2ffffffffff
        fff33fffffffffffffffccc4444444444444422fffffffff
        fffffffffffffffffffffffffffffffffffff2f2ffffffff
        ffffffffffffffffffffccc4444444444444422fffffffff
        fffffffffffffffffffffffffffffffffffff2ffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff1ffffffff2fffff1fffffffffff
        fffffffffffffffffffffffffffff2f2ffffffffffffffff
        fffffffffff3ffffffffffffffff22222fffffffffffffff
        fffffffffffffffffffffffffffff4f4ffffffffffffffff
        fffffffffffffffffffffffffffff4f4ffffffffffffffff
        fffffffffffffffffffffffffffff4f4ffffffffffffffff
        fffffffffffffffffffffffffffff4f4ffffffffffffffff
        fffffffffffffffffffffffffffff4f44444fffffff1ffff
        fffffffffffffffffffffffffffff4fffff4444fffffffff
        fffffffffffffffffffffffffff3f44444ffff4444444ccc
        fffffffffffffffffffffffffffffffff4444fffffffffff
        ffffffffff5fffffffffffffffffffffffff444444444ccc
        fffffffff5ffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff3ffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff
        ffff5fffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff1fffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff1fff
        ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    game.setDialogCursor(img`
        2222222222222222...
        2..............2...
        2.222222222222.2...
        .2.222....222.2....
        .2.222.222222.2....
        ..2.22...222.2.....
        ..2.22.22222.2.....
        ...2.2....2.2......
        ...2.222222.2......
        ....2.2222.2.......
        ....2.2222.2.......
        .....2.22.2........
        .....2.22.2........
        ......2..2.........
        ......2..2.........
        .......22..........
        ...................
        ...................
        ...................
        ...................
        ........99.........
        .......9..9........
        .......9..9........
        ......9.99.9.......
        ......9.99.9.......
        .....9.9999.9......
        .....9.9999.9......
        ....9.999999.9.....
        ....9.9....9.9.....
        ...9.99.99.99.9....
        ...9.99....99.9....
        ..9.999.999999.9...
        ..9.999.999999.9...
        .9.9999.9999999.9..
        .9.9999.9999999.9..
        .9999999999999999..
        ............eee....
        .eeeeeeeeebbbbbbee.
        eeeeeeeeeebbcccbbbe
        eeeeeeeeeebcfffccbe
        ebbbbbeeeebcfffccbe
        ebbccbeeeebcfffcbbe
        ebcfcbeeeebcffccbee
        ebcccbeeeebbcccb...
        ebbccbeeeeebbbbb...
        eebbbbeeeeeeee.....
        eeeeeeeeeeeee......
        .ee................
        `)
    game.setDialogTextColor(9)
    game.showLongText("you ran out of fuel. you drifted through space until the enemies dystroyed you for scrap", DialogLayout.Full)
    game.over(false, effects.slash)
})
statusbars.onZero(StatusBarKind.shield, function (status) {
    statusbar2.destroy()
    statusbar3.attachToSprite(mySprite, -24, 0)
    statusbar5.attachToSprite(mySprite, -28, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 100)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -50
    music.smallCrash.play()
    statusbar5.value = 30
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (statusbar2.value != 0) {
        statusbar2.value += -34
        otherSprite.destroy(effects.disintegrate, 500)
        scene.cameraShake(5, 600)
        music.zapped.play()
    } else {
        statusbar3.value += -34
        music.smallCrash.play()
        otherSprite.destroy(effects.disintegrate, 500)
    }
})
let statusbar4: StatusBarSprite = null
let myEnemy: Sprite = null
let myFuel: Sprite = null
let projectile: Sprite = null
let statusbar5: StatusBarSprite = null
let statusbar3: StatusBarSprite = null
let statusbar2: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . 9 9 . . . . . . . 
    . . . . . . 9 . . 9 . . . . . . 
    . . . . . . 9 . . 9 . . . . . . 
    . . . . . 9 . 9 9 . 9 . . . . . 
    . . . . . 9 . 9 9 . 9 . . . . . 
    . . . . 9 . 9 9 9 9 . 9 . . . . 
    . . . . 9 . 9 9 9 9 . 9 . . . . 
    . . . 9 . 9 9 9 9 9 9 . 9 . . . 
    . . . 9 . 9 . . . . 9 . 9 . . . 
    . . 9 . 9 9 . 9 9 . 9 9 . 9 . . 
    . . 9 . 9 9 . . . . 9 9 . 9 . . 
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 . 
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 . 
    9 . 9 9 9 9 9 9 9 9 9 9 9 9 . 9 
    9 . . . . . . . . . . . . . . 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
statusbar = statusbars.create(20, 2, StatusBarKind.Energy)
statusbar2 = statusbars.create(20, 2, StatusBarKind.shield)
statusbar3 = statusbars.create(20, 2, StatusBarKind.Health)
statusbar5 = statusbars.create(20, 2, StatusBarKind.ammo)
statusbar5.setColor(3, 12)
statusbar2.setColor(8, 2)
statusbar.attachToSprite(mySprite, -20, 0)
statusbar2.attachToSprite(mySprite, -24, 0)
statusbar3.attachToSprite(mySprite, -28, 0)
statusbar5.attachToSprite(mySprite, -32, 0)
mySprite.sayText("incoming enemies!", 2000, true)
game.onUpdateInterval(5000, function () {
    myFuel = sprites.createProjectileFromSide(img`
        5 5 5 5 5 5 5 5 5 
        5 . 5 5 5 5 5 5 5 
        5 5 5 . . . . 5 5 
        5 5 5 . 5 5 5 5 5 
        5 5 5 . 5 . . 5 5 
        5 5 5 . 5 5 . 5 5 
        5 5 5 . . . . 5 5 
        5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 
        `, 0, 50)
    myFuel.x = randint(5, 155)
    myFuel.setKind(SpriteKind.Gas)
})
game.onUpdateInterval(500, function () {
    myEnemy = sprites.createProjectileFromSide(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . . . . . . . . . 2 
        2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
        . 2 . 2 2 2 . . . . 2 2 2 . 2 . 
        . 2 . 2 2 2 . 2 2 2 2 2 2 . 2 . 
        . . 2 . 2 2 . . . 2 2 2 . 2 . . 
        . . 2 . 2 2 . 2 2 2 2 2 . 2 . . 
        . . . 2 . 2 . . . . 2 . 2 . . . 
        . . . 2 . 2 2 2 2 2 2 . 2 . . . 
        . . . . 2 . 2 2 2 2 . 2 . . . . 
        . . . . 2 . 2 2 2 2 . 2 . . . . 
        . . . . . 2 . 2 2 . 2 . . . . . 
        . . . . . 2 . 2 2 . 2 . . . . . 
        . . . . . . 2 . . 2 . . . . . . 
        . . . . . . 2 . . 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        `, 0, 50)
    myEnemy.x = randint(5, 155)
    myEnemy.setKind(SpriteKind.Enemy)
    statusbar4 = statusbars.create(20, 2, StatusBarKind.EnemyHealth)
    statusbar4.setColor(4, 12)
    statusbar4.attachToSprite(myEnemy, 5, 0)
})
game.onUpdateInterval(300, function () {
    statusbar.value += -1
})
