basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        music.ringTone(262)
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    } else {
        music.ringTone(349)
        basic.clearScreen()
    }
})
